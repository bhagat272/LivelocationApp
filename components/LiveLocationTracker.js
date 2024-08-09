import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from './hooks/useLocation';


const LiveLocationTracker = () => {
  const location = useLocation();

  if (!location) {
    return <View><Text>Fetching Location...<Image source={{uri:"https://cdn.dribbble.com/users/561216/screenshots/4515298/pin-dribbble-_800_600_.gif"}}></Image></Text></View>;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="You are here"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default LiveLocationTracker;
