module.exports = {
  setupFiles: ['<rootDir>/jest.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/generators/',
  ],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['src'],

  // This fixed an error related to the CSS and loading gif breaking
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss|css)$': '<rootDir>/src/core/__mocks__/fileMock.ts',
  },

  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/loader.{ts,tsx}',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: ['.*\\.d\\.ts'],
  preset: 'ts-jest',
}