import {StyleSheet, View} from 'react-native';
import React from 'react';
import Searchbar from './Searchbar';
import HeaderAction from './HeaderAction';

const Header = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <View style={styles.container}>
      <Searchbar onChangeText={setSearchText} value={searchText} />
      <HeaderAction />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'ffffff',
    padding: 16,
    gap: 12,
  },
});
