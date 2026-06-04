#include <AccelStepper.h>

// Hall sensors for belt drive
#define HALL_SENSOR_A 7  // End sensor
#define HALL_SENSOR_B 4  // Start sensor

// Hall sensors for track  
#define HALL_SENSOR_C 12 // End sensor
#define HALL_SENSOR_D 11 // Start sensor

// Steppers: belt drive and track
AccelStepper beltStepper(1, 3, 2);   // STEP=3, DIR=2
AccelStepper trackStepper(1, 9, 8);  // STEP=9, DIR=8

// States: 0=waiting, 1=racing, 2=returning
int beltState = 1;  // Start racing immediately
int trackState = 1; // Start racing immediately

// Speed control variables
unsigned long lastBeltSpeedChange = 0;
unsigned long lastTrackSpeedChange = 0;
unsigned long beltSpeedInterval = 2000;
unsigned long trackSpeedInterval = 3000;

const unsigned long DEBOUNCE_TIME = 200;
const int MIN_SPEED = 1500;
const int MAX_SPEED = 5000;
const int RETURN_SPEED = 3000;

void setup() {
  Serial.begin(9600);
  pinMode(HALL_SENSOR_A, INPUT_PULLUP);  
  pinMode(HALL_SENSOR_B, INPUT_PULLUP);
  pinMode(HALL_SENSOR_C, INPUT_PULLUP);  
  pinMode(HALL_SENSOR_D, INPUT_PULLUP);
  
  randomSeed(analogRead(A0));
  
  // Belt stepper setup
  beltStepper.setMaxSpeed(MAX_SPEED);
  beltStepper.setAcceleration(1000);
  
  // Track stepper setup
  trackStepper.setMaxSpeed(MAX_SPEED);
  trackStepper.setAcceleration(1000);
  
  // Start race immediately on boot/reset
  startRace();
}

void loop() {
  unsigned long currentTime = millis();
  
  // Belt control
  controlBelt(currentTime);
  
  // Track control  
  controlTrack(currentTime);
  
  beltStepper.runSpeed();
  trackStepper.runSpeed();
}

void startRace() {
  Serial.println("Race started!");
  beltState = 1;  // Racing
  trackState = 1; // Racing
  
  // Start moving forward with random speeds
  int beltSpeed = random(MIN_SPEED, MAX_SPEED + 1);
  int trackSpeed = random(MIN_SPEED, MAX_SPEED + 1);
  
  beltStepper.setSpeed(beltSpeed);
  trackStepper.setSpeed(trackSpeed);
  
  lastBeltSpeedChange = millis();
  lastTrackSpeedChange = millis();
  
  Serial.print("Belt speed: ");
  Serial.print(beltSpeed);
  Serial.print(" | Track speed: ");
  Serial.println(trackSpeed);
}

void controlBelt(unsigned long currentTime) {
  int hallB = digitalRead(HALL_SENSOR_B); // Start sensor
  int hallA = digitalRead(HALL_SENSOR_A); // End sensor
  
  if (beltState == 1) { // Racing
    // Random speed changes
    if (currentTime - lastBeltSpeedChange > beltSpeedInterval) {
      int newSpeed = random(MIN_SPEED, MAX_SPEED + 1);
      beltStepper.setSpeed(newSpeed);
      beltSpeedInterval = random(1000, 4000);
      lastBeltSpeedChange = currentTime;
      Serial.print("Belt speed: ");
      Serial.println(newSpeed);
    }
    
    // Check end sensor
    if (hallA == LOW) {
      Serial.println("Belt: Reached end, returning");
      beltState = 2; // Returning
      beltStepper.setSpeed(-RETURN_SPEED);
    }
  }
  else if (beltState == 2) { // Returning
    // Check start sensor
    if (hallB == LOW) {
      Serial.println("Belt: Back at start, ready for next race");
      beltState = 0; // Waiting
      beltStepper.setSpeed(0);
    }
  }
}

void controlTrack(unsigned long currentTime) {
  int hallD = digitalRead(HALL_SENSOR_D); // Start sensor
  int hallC = digitalRead(HALL_SENSOR_C); // End sensor
  
  if (trackState == 1) { // Racing
    // Random speed changes
    if (currentTime - lastTrackSpeedChange > trackSpeedInterval) {
      int newSpeed = random(MIN_SPEED, MAX_SPEED + 1);
      trackStepper.setSpeed(newSpeed);
      trackSpeedInterval = random(1500, 5000);
      lastTrackSpeedChange = currentTime;
      Serial.print("Track speed: ");
      Serial.println(newSpeed);
    }
    
    // Check end sensor
    if (hallC == LOW) {
      Serial.println("Track: Reached end, returning");
      trackState = 2; // Returning
      trackStepper.setSpeed(-RETURN_SPEED);
    }
  }
  else if (trackState == 2) { // Returning
    // Check start sensor
    if (hallD == LOW) {
      Serial.println("Track: Back at start, ready for next race");
      trackState = 0; // Waiting
      trackStepper.setSpeed(0);
    }
  }
}
