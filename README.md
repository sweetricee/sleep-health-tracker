# sleep-health-tracker
# Sleep Health Tracker (CLI)

## Description
A JavaScript command-line utility that calculates a user's weekly sleep debt. 

I originally built a basic version of this logic, but recently refactored the codebase to eliminate repetitive control flow by implementing a JavaScript Object to store weekly data. I also upgraded the calculation engine to use functional programming methods like `Object.values()` and `.reduce()` to dynamically sum the data points.

## Features
- **Dynamic Calculation:** Automatically tallies weekly hours using array reduction.
- **Configurable Goals:** Users can input their ideal nightly sleep target.
- **Variance Analysis:** Calculates the exact deficit or surplus of sleep hours and outputs a formatted analysis to the console.

## Tech Stack
- JavaScript (ES6+)
- Node.js

## How to Run
`node main.js`
