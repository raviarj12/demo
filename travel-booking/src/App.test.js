import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Function to be tested
function add(a, b) {
  return a + b;
}

// Jest test case
test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);  // Assertion to check if add(1, 2) returns 3
});

// Function to be tested
function multiply(a, b) {
  return a * b;
}

describe('Multiplication Tests', () => {
  test('multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);  // Testing multiply function
  });

  test('multiplies by zero', () => {
    expect(multiply(0, 5)).toBe(0);  // Testing multiplication by zero
  });
});

// Function to be tested
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

describe('Check Number Function', () => {
  test('should return "positive" for positive numbers', () => {
    expect(checkNumber(1)).toBe('positive');
  });

  test('should return "negative" for negative numbers', () => {
    expect(checkNumber(-1)).toBe('negative');
  });

  test('should return "zero" for zero', () => {
    expect(checkNumber(0)).toBe('zero');
  });
});


// Mocking a database or external API call
function fetchUserData(userId) {
  return { userId, username: 'testuser' };
}

function getUserProfile(userId) {
  const userData = fetchUserData(userId);
  return `User Profile: ${userData.username}`;
}

describe('Integration Tests', () => {
  test('should integrate fetchUserData and getUserProfile', () => {
    expect(getUserProfile(1)).toBe('User Profile: testuser');
  });
});

// Function to be tested
function fetchDataFromAPI() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => data);
}

// Mocking fetch function
jest.mock('node-fetch', () => jest.fn());

// Unit test with mock service
test('should fetch data correctly', async () => {
  // Mock response for fetch
  fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ name: 'Test Data' })
  });

  const data = await fetchDataFromAPI();
  expect(data.name).toBe('Test Data');
});
