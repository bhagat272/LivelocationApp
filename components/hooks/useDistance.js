import { useState, useEffect } from 'react';
import haversine from 'haversine';

export const useDistance = (location1, location2) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (location1 && location2) {
      const calculatedDistance = haversine(location1, location2, { unit: 'meter' });
      setDistance(calculatedDistance);
    }
  }, [location1, location2]);

  return distance;
};
