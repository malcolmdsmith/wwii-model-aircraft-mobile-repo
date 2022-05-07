import Bugsnag from "@bugsnag/expo";
Bugsnag.start();

import * as React from "react";
import AppTabsNavigator from "./app/navigation/AppTabsNavigator";
import ErrorView from "./app/screens/errorViewScreen";
import { LogBox } from "react-native";

const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

export default () => (
  <ErrorBoundary FallbackComponent={ErrorView}>
    <App />
  </ErrorBoundary>
);

LogBox.ignoreAllLogs(true);

// LogBox.ignoreLogs([
//   "ViewPropTypes will be removed from React Native",
//   "onstants.platform.ios.model has been deprecated in favor of expo-device",
// ]);

class App extends React.Component {
  state = {};

  componentDidMount() {
    console.error = (error) => error.apply;

    // const originalWarn = console.warn;

    // console.warn = (message, ...optionalParams) => {
    //   //LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed']);
    //   // Insure that we don't try to perform any string-only operations on
    //   // a non-string type:
    //   if (typeof message === "string") {
    //     // Check if the message contains the blacklisted substring
    //     if (
    //       /Warning: componentWillReceiveProps has been renamed/g.test(message)
    //     ) {
    //       // Don't log the value
    //       return;
    //     }
    //     if (/ViewPropTypes will be removed from React Native/g.test(message)) {
    //       // Don't log the value
    //       return;
    //     }
    //   }
    //   // Otherwise delegate to the original 'console.warn' function
    //   originalWarn(message, ...optionalParams);
    // };
  }

  render() {
    return (
      //<NavigationContainer>
      <AppTabsNavigator />
      //</NavigationContainer>
    );
  }
}
