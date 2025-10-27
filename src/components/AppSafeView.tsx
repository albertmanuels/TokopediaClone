import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {IS_ANDROID} from '../constants/globals';

interface AppSafeViewProps {
  children: React.ReactNode;
  style?: object;
}

const AppSafeView = (props: AppSafeViewProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, props.style]}>{props.children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
