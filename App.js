import Bugsnag from "@bugsnag/expo";
Bugsnag.start();

import React, { useEffect } from "react";
import AppTabsNavigator from "./app/navigation/AppTabsNavigator";
import ErrorView from "./app/screens/errorViewScreen";
import { LogBox } from "react-native";

const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

export default () => (
  <ErrorBoundary FallbackComponent={ErrorView}>
    <App />
  </ErrorBoundary>
);

// LogBox.ignoreAllLogs(true);

// LogBox.ignoreLogs([
//   "ViewPropTypes will be removed from React Native",
//   "onstants.platform.ios.model has been deprecated in favor of expo-device",
// ]);

const App = () => {
  useEffect(
    () =>
      LogBox.ignoreLogs([
        "ViewPropTypes will be removed from React Native",
        "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.",
        "[react-native-gesture-handler] Seems like you're using an old API with gesture components,",
      ]),
    []
  );

  return (
    //<NavigationContainer>
    <AppTabsNavigator />
    //</NavigationContainer>
  );
};
