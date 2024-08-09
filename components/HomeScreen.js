import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('LocationTracker')}
      >
        <ImageBackground
          source={{ uri: 'https://th.bing.com/th/id/OIP.zftHBEqNkeWYXXnTA0gVoAHaDZ?w=348&h=160&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} // Replace with an actual map image URL or local asset
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.overlay}>
            <Text style={styles.cardText}>Track Live Location</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('DistanceCalculator')}
      >
        <ImageBackground
          source={{ uri: 'https://th.bing.com/th/id/OIP.J7Tirrhf4dZvunHfu-0S9gAAAA?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} // Replace with an actual map image URL or local asset
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.overlay}>
            <Text style={styles.cardText}>Calculate Distance</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0.4, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
