import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Chip from '../../../components/Chip';

const MenuSection = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          style={styles.menuRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
          }}
        >
          <Chip label="Bonus" onPress={() => {}} />
          <Chip label="Rp1.510.114" onPress={() => {}} />
          <Chip label="Cek Kupon" onPress={() => {}} />
          <Chip label="Location" onPress={() => {}} />
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView
          style={styles.menuRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 18,
          }}
        >
          <Chip label="Cek Hematmu" isRounded onPress={() => {}} />
          <Chip label="Gajian Sale" isRounded onPress={() => {}} />
          <Chip label="Top-Up & Tagihan" isRounded onPress={() => {}} />
          <Chip label="Mall" isRounded onPress={() => {}} />
          <Chip label="Dapetin Rp800rb" isRounded onPress={() => {}} />
          <Chip label="Paylater" isRounded onPress={() => {}} />
        </ScrollView>
      </View>
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  menuRow: {
    paddingVertical: 6,
    flexDirection: 'row',
    marginRight: -16,
  },
});
