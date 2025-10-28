import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/banner-1.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    height: 150,
  },
  wrapper: {
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    objectFit: 'fill',
  },
});
