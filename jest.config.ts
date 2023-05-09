export default {
  // The root of your project, relative to the location of this file
  rootDir: './',

  // The directories where Jest should look for test files
  testMatch: ['<rootDir>/src/tests/**/*.test.{ts,tsx}'],

  // The file extensions Jest should use when looking for test files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // The transform configuration options for Jest
  transform: {
    // Use ts-jest for TypeScript files
    '^.+\\.tsx?$': 'ts-jest',
  },

  // The moduleNameMapper configuration options for Jest
  moduleNameMapper: {
    // Map imports of CSS/SCSS files to an empty module
    '\\.(css|scss)$': 'identity-obj-proxy',
  },

  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/*.d.ts'],
};
