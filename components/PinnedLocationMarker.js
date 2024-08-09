import React from 'react';
import { Marker } from 'react-native-maps';

const PinnedLocationMarker = ({ coordinate, title }) => {
  return (
    <Marker
      coordinate={coordinate}
      title={title || 'Pinned Location'}
    />
  );
};

export default PinnedLocationMarker;
