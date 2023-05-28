// Exercise: Level 1 - Arrays

// Declare an empty array;
const emptyArray = [];

// Declare an array with more than 5 number of elements
const arrayWithFiveElements = [5, 4, 3, 2, 1];

// Find the length of your array
arrayWithFiveElements.length;

// Get the first item, the middle item and the last item of the array
const firtItem = arrayWithFiveElements[0];
const middleItem = arrayWithFiveElements[Math.floor(arrayWithFiveElements.length / 2)];
const lastItem = arrayWithFiveElements[arrayWithFiveElements.length - 1];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['hi', 5, true, 'book', { 1: 5, 2: 3, 3: 2}, 4, 1];
mixedDataTypes.length;

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[Math.floor(itCompanies.length - 1)]

console.log('firstCompany: ', firstCompany, '; middleCompany: ', middleCompany, ';  lastCompany: ', lastCompany);

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
let companies = [];
for (let i = 0; i < itCompanies.length; i++) {
    let uppercaseCompany = itCompanies[i].toUpperCase();
    companies.push(uppercaseCompany)
}
console.log(companies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]},  ${itCompanies[2]},  ${itCompanies[3]},  ${itCompanies[4]},  ${itCompanies[5]}, and  ${itCompanies[6]} are big IT companies.`)


// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let companyIndex = itCompanies.indexOf(company);
companyIndex === -1 ? console.log(`${company} is not found.`) : console.log(`${company}`)

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method

// Reverse the array using reverse() method

// Slice out the first 3 companies from the array

// Slice out the last 3 companies from the array

// Slice out the middle IT company or companies from the array

// Remove the first IT company from the array

// Remove the middle IT company or companies from the array

// Remove the last IT company from the array

// Remove all IT companies