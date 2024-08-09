import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LocationTrackerScreen from './LocationTrackerScreen';
import DistanceCalculatorScreen from './DistanceCalculatorScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationTracker" component={LocationTrackerScreen} />
      <Stack.Screen name="DistanceCalculator" component={DistanceCalculatorScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
