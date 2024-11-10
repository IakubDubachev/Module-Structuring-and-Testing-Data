function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;  // No redeclaration, just use the parameter
  return percentage;
}

// Call the function with a decimal number and log the result
console.log(convertToPercentage(0.5));  // Output: "50%"