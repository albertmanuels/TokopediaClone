import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabs from './AppTabs';

type RootStackParamList = {
  AppTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppTabs" component={AppTabs} />
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
