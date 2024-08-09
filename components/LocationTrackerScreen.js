import React from 'react';
import { StyleSheet, View } from 'react-native';
import LiveLocationTracker from './LiveLocationTracker';

const LocationTrackerScreen = () => {
  return (
    <View style={styles.container}>
      <LiveLocationTracker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LocationTrackerScreen;
