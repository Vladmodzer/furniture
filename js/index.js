// function generateCssVariables(data) {
//   let cssVariables = '';

//   // Split the input data into lines
//   const lines = data.split('\n');

//   // Create an array to store variable objects
//   const variables = [];

//   // Iterate through each line
//   for (let i = 0; i < lines.length; i += 3) {
//     // Check if the lines exist before attempting to trim
//     if (lines[i] && lines[i + 1] && lines[i + 2]) {
//       // Extract the name, color, and number from each block
//       const name = lines[i].trim().replace('/', '').replace(/\s+/g, ''); // Remove "/", Remove spaces
//       const color = lines[i + 1].trim();
//       const number = parseInt(lines[i + 2].trim(), 10) || 0; // Parse as integer, default to 0 if NaN

//       // Store the variable in the array
//       variables.push({ name, color, number });
//     }
//   }

//   // Sort variables in descending order based on the "number" property
//   variables.sort((a, b) => b.number - a.number);

//   // Create a CSS variable string with the sorted values
//   variables.forEach(variable => {
//     const variableName = variable.name.startsWith('#') ? variable.name.slice(1) : variable.name;
//     cssVariables += `/* ${variable.number} */
//                 --${variableName}:${variable.color};\n`;
//   });

//   return cssVariables;
// }

// // Example usage with your provided data
// const inputData = `Accents/Accents
// #029faeff
// 7
// Accents/Dark Accents
// #007580ff
// 5
// Gray Scales/Black
// #272343ff
// 100
// Gray Scales/Dark Gray
// #636270ff
// 8
// Gray Scales/Gray
// #9a9caaff
// 30
// Gray Scales/Off White
// #f0f2f3ff
// 19
// Gray Scales/Off White
// #e1e3e5ff
// 1
// Gray Scales/White
// #ffffffff
// 46
// Status/Red
// #f05c52ff
// 1
// Status/Success
// #01ad5aff
// 12
// Status/Warning
// #f5813fff
// 4
// #ffffffff
// #ffffffff
// 15
// #f79410ff
// #f79410ff
// 1
// #ff5f00ff
// #ff5f00ff
// 1
// #eb001bff
// #eb001bff
// 1
// #f79e1bff
// #f79e1bff
// 1
// #253b80ff
// #253b80ff
// 1
// #179bd7ff
// #179bd7ff
// 1
// #e6a540ff
// #e6a540ff
// 2
// #2566afff
// #2566afff
// 1
// #000000ff
// #000000ff
// 4
// #007580ff
// #007580ff
// 1
// #636270ff
// #636270ff
// 5
// #272343ff
// #272343ff
// 1`;

// const cssVariables = generateCssVariables(inputData);
// console.log(cssVariables);
