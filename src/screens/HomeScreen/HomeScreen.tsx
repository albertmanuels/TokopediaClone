import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppSafeView from '../../components/AppSafeView';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <Text>HomeScreen</Text>
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
