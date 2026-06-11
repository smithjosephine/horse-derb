# Horse Derby: Electro-Mechanical Horse Racing Simulator

<img width="2048" height="1536" alt="9A547201-3295-4D52-970C-7FBAA989C525_1_102_o" src="https://github.com/user-attachments/assets/ce06fcde-ab64-41d5-9a86-fc1a912798bf" />

## Overview

During my 21st birthday trip to Las Vegas, I became fascinated by *Fortune Cup*, an electro-mechanical horse racing game. Watching the interaction between the machine's mechanical motion, embedded electronics, and betting system inspired me to build my own version as a way to expand my knowledge of embedded systems and hardware design.

The goal of this project was to recreate the experience of a mechanical horse race while incorporating realistic race statistics, player betting, and a custom-built control system.

## Hardware Design

To drive the horses, I designed a linear belt-drive system inspired by the motion systems used in the 3D printers available in my department. I purchased a belt-drive kit and built a multi-lane race track from scrap wood, creating custom wooden horse and jockey figurines that travel along individual tracks.

Horse position is tracked using latching Hall-effect sensors mounted at the start and end of each lane. Strong neodymium magnets attached to each horse trigger the sensors, allowing a Wi-Fi-enabled Arduino to detect when a horse reaches key positions on the track.

### Hardware Components

* Wi-Fi-enabled Arduino microcontroller
* Stepper motors and motor drivers
* GT2-style belt-drive system
* Latching Hall-effect sensors
* Neodymium magnets
* Custom wooden race track and horse figurines

## Race Simulation

I wanted the races to feel realistic rather than relying on purely random outcomes.

I searched for historical horse racing datasets and found a community-maintained dataset containing Kentucky Derby results from 2001–2024. Using Python, I cleaned and analyzed the data to better understand how betting odds relate to race outcomes.

I constructed cumulative distribution functions (CDFs) from historical pre-race odds to generate realistic horse fields and studied the relationship between betting odds and Beyer Speed Figures, a standardized measure of racing performance.

The simulation uses each horse's odds to determine a baseline speed:

* Favorites receive higher base speeds.
* Longshots receive lower base speeds.
* Random speed fluctuations occur throughout the race.
* Better horses win more frequently, while still allowing occasional upsets.

This creates races that are statistically grounded while preserving the unpredictability that makes horse racing entertaining.

## Software

To support multiplayer betting, I taught myself JavaScript and developed a web interface that allows users to:

* Place bets before races
* View race information and odds
* Receive race results
* Track winnings and payouts

The website communicates directly with the Arduino, enabling race outcomes and betting information to be synchronized between the hardware and software systems.

## Challenges

As my first substantial embedded systems project, I encountered several hardware and electrical challenges. One notable setback occurred while building the power supply circuitry, when I accidentally shorted a motor driver and damaged the Arduino.

The project is currently paused while I replace the damaged Arduino and stepper driver hardware. Once those components are replaced, I plan to continue development and expand the system's functionality.

## Future Work

* Repair and recommission the hardware platform
* Improve race outcome modeling
* Add additional race statistics and visualizations
* Enhance the multiplayer betting interface
* Design custom PCBs for improved reliability

## Project Status

**Paused (awaiting replacement hardware)**

Development will resume once the damaged Arduino and stepper driver are replaced.
