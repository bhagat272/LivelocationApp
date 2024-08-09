import haversine from 'haversine';

export const calculateDistance = (location1, location2) => {
  return haversine(location1, location2, { unit: 'meter' });
};
