import {ScrollView} from 'react-native';
import React from 'react';
import AppSafeView from '../../components/AppSafeView';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MenuSection from './layouts/MenuSection';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <Header />
      <ScrollView contentContainerStyle={{flex: 1, gap: 16}}>
        <Banner />
        <MenuSection />
      </ScrollView>
    </AppSafeView>
  );
};

export default HomeScreen;
