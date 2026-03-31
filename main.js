/**
 * Weekly Sleep Debt Tracker
 * Refactored to use JavaScript Objects and Functional Array Methods
 */

// 1. Upgrade: Use a Data Structure (Object) instead of a long if/else chain.
// This is much cleaner and easier to update.
const weeklySleepData = {
  monday: 8,
  tuesday: 6,
  wednesday: 7,
  thursday: 5,
  friday: 7,
  saturday: 6,
  sunday: 9
};

// 2. Upgrade: Make it dynamic. 
// Instead of hardcoding "8 + 6 + 7...", we extract the numbers from the object 
// and use the `.reduce()` method to calculate the sum automatically.
const getActualSleepHours = (sleepData) => {
  const hoursArray = Object.values(sleepData);
  return hoursArray.reduce((total, hours) => total + hours, 0);
};

const getIdealSleepHours = (idealDailyHours) => idealDailyHours * 7;

// 3. Upgrade: Pass arguments into the function so it is reusable, 
// rather than relying on global variables.
const calculateSleepDebt = (sleepData, idealDailyHours) => {
  const actualSleepHours = getActualSleepHours(sleepData);
  const idealSleepHours = getIdealSleepHours(idealDailyHours);
  
  // Math.abs ensures we always get a positive number for the difference
  const difference = Math.abs(actualSleepHours - idealSleepHours);

  console.log(`\n--- Sleep Analysis ---`);
  console.log(`Target: ${idealSleepHours} hours | Actual: ${actualSleepHours} hours`);

  if (actualSleepHours === idealSleepHours) {
    console.log("Result: You got a perfect amount of sleep! 🎯\n");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Result: Surprisingly more sleep than needed. You are over by ${difference} hours. 😴\n`);
  } else {
    console.log(`Result: Please get some rest. You are under your goal by ${difference} hours, which is troublesome. ⚠️\n`);
  }
};

// Execute the program
calculateSleepDebt(weeklySleepData, 8);