import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderAction = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#eee"
        onPress={() => {}}
        style={styles.touchableIcon}
      >
        <Icon name="chatbubble-ellipses-outline" size={28} color="#000" />
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#eee"
        onPress={() => {}}
        style={styles.touchableIcon}
      >
        <Icon name="cart-outline" size={28} color="#000" />
      </TouchableHighlight>
    </View>
  );
};

export default HeaderAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  touchableIcon: {
    borderRadius: 8,
  },
});
