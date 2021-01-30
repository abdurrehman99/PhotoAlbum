require('jest-fetch-mock').enableMocks();

jest.useFakeTimers();

jest.mock('@react-navigation/native');
jest.mock('@react-navigation/stack');
