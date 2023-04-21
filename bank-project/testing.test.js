// Import necessary modules and dependencies
import { fireEvent } from '@testing-library/dom';
import { accounts, currentAccount } from './script.js'; // Import the necessary module that contains the code to be tested

// Mock the DOM environment using JSDOM
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

// Mock the necessary DOM elements
const btnClose = document.createElement('button');
btnClose.id = 'btnClose';
const inputClosePin = document.createElement('input');
inputClosePin.id = 'inputClosePin';
const inputCloseUsername = document.createElement('input');
inputCloseUsername.id = 'inputCloseUsername';
document.body.appendChild(btnClose);
document.body.appendChild(inputClosePin);
document.body.appendChild(inputCloseUsername);

// Mock the current account
const mockCurrentAccount = {
  username: 'username',
  pin: '1234',
};
const originalAccounts = [...accounts]; // Make a copy of the original accounts array for later comparison

// Write the test
test('btnClose click event', () => {
  // Set up initial state
  inputCloseUsername.value = mockCurrentAccount.username;
  inputClosePin.value = mockCurrentAccount.pin;
  currentAccount = mockCurrentAccount;

  // Trigger the click event on btnClose
  fireEvent.click(btnClose);

  // Assert expected behaviors
  expect(accounts).not.toEqual(originalAccounts); // Check if the account is deleted from the accounts array
  expect(inputClosePin.blur).toHaveBeenCalled(); // Check if inputClosePin.blur() is called
  expect(containerApp.style.opacity).toBe('0'); // Check if containerApp's opacity is set to 0
  expect(inputClosePin.value).toBe(''); // Check if inputClosePin's value is cleared
  expect(inputCloseUsername.value).toBe(''); // Check if inputCloseUsername's value is cleared
});
