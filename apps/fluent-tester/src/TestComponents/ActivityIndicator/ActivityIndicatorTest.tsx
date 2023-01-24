import * as React from 'react';
import { Text } from '@fluentui/react-native';
import { Test, TestSection, PlatformStatus } from '../Test';
import { ACTIVITY_INDICATOR_TESTPAGE } from '../../../../E2E/src/ActivityIndicator/consts';
import { View, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    flexDirection: 'row',
    marginVertical: 5,
  },
  testRoot1: {
    maxHeight: 200,
    flex: 1,
    width: 100,
  },
  testRoot2: {
    maxHeight: 500,
    flex: 1,
    width: 100,
  },
  testRoot3: {
    maxHeight: 1000,
    flex: 1,
    width: 100,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
});

const BasicActivityIndicator: React.FunctionComponent = () => {
  return (
    <View style={styles.root}>
      <View style={styles.testRoot1}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Text>
        </ScrollView>
      </View>
      <View style={styles.testRoot2}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Text>
        </ScrollView>
      </View>
      <View style={styles.testRoot3}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const activityIndicatorSections: TestSection[] = [
  {
    name: 'Base ActivityIndicator',
    testID: ACTIVITY_INDICATOR_TESTPAGE,
    component: BasicActivityIndicator,
  },
];

export const ActivityIndicatorTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Backlog',
    uwpStatus: 'Backlog',
    iosStatus: 'Beta',
    macosStatus: 'Backlog',
    androidStatus: 'Beta',
  };

  const description =
    'ActivityIndicator is a visual representation that data is being loaded. It is implemented with a View wrapping an Animated SVG. The View is to ensure that AccessibilityRole works. AccessibilityRole currently does not work on SVGs.';

  return <Test name="ActivityIndicator Test" description={description} sections={activityIndicatorSections} status={status}></Test>;
};
