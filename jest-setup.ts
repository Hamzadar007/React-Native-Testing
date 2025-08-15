// // Updated mock for React Native 0.80.2
// jest.mock("react-native/src/private/animated/NativeAnimatedHelper", () => ({
//   addListener: jest.fn(),
//   removeListener: jest.fn(),
//   removeAllListeners: jest.fn(),
//   connectAnimatedNodes: jest.fn(),
//   disconnectAnimatedNodes: jest.fn(),
// }));

import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-worklets if needed
jest.mock("react-native-worklets", () => ({
  runOnJS: (fn: any) => fn,
  runOnUI: (fn: any) => fn,
}));