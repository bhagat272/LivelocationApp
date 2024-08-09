import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { useLocation } from './hooks/useLocation';
import PinnedLocationMarker from './PinnedLocationMarker';
import DistanceCalculator from './DistanceCalculator';

const DistanceCalculatorScreen = () => {
  const location = useLocation();
  const [pinnedLocation, setPinnedLocation] = useState(null);

  const handleMapPress = (event) => {
    setPinnedLocation(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
        >
          <PinnedLocationMarker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
          {pinnedLocation && (
            <PinnedLocationMarker
              coordinate={pinnedLocation}
              title="Pinned Location"
            />
          )}
        </MapView>
      ) : (
        <Text style={styles.loadingText}>Fetching location...</Text>
      )}
      <View style={styles.distanceContainer}>
        <DistanceCalculator
          location1={location ? location.coords : null}
          location2={pinnedLocation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  distanceContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DistanceCalculatorScreen;
