import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface ChipProps {
  label: string;
  isRounded?: boolean;
  roundedSize?: DimensionValue;
  onPress: () => void;
}

const Chip = (props: ChipProps) => {
  const {label, isRounded = false, roundedSize = 70, onPress} = props;

  const roundedStyle: StyleProp<ViewStyle> = {
    borderRadius: '50%',
    width: roundedSize,
    height: roundedSize,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const roundedLabelStyle: StyleProp<TextStyle> = {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <TouchableOpacity
      style={[styles.container, isRounded && {width: roundedSize}]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={[styles.wrapper, isRounded && roundedStyle]}>
        {isRounded ? (
          <Icon name="smartphone" size={Number(roundedSize) / 2} />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </View>
      {isRounded && <Text style={roundedLabelStyle}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
