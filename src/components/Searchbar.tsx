import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface SearchbarProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
}

const Searchbar = (props: SearchbarProps) => {
  const {placeholder = 'Cari di Tokopedia', onChangeText, value} = props;

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#999" style={styles.icon} />
      <TextInput
        inputMode="search"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholderTextColor="#999"
        autoFocus={false}
      />
      {!value && <Text style={styles.endText}>Cari</Text>}
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 12,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 40,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
  },
  endText: {
    position: 'absolute',
    right: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
