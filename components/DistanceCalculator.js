import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import haversine from 'haversine';

const DistanceCalculator = ({ location1, location2 }) => {
  if (!location1 || !location2) {
    return <Text>Waiting for locations...</Text>;
  }

  // Ensure that location1 and location2 have latitude and longitude
  if (!location1.latitude || !location1.longitude || !location2.latitude || !location2.longitude) {
    return <Text>Invalid location data</Text>;
  }

  const distance = haversine(
    { latitude: location1.latitude, longitude: location1.longitude },
    { latitude: location2.latitude, longitude: location2.longitude },
    { unit: 'meter' }
  );

  return (
    <View style={styles.container}>
      <Text>Distance: {distance.toFixed(2)} meters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
  },
});

export default DistanceCalculator;
