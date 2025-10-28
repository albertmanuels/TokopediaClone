import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PromoScreen from '../screens/PromoScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export type AppTabsParamList = {
  Home: undefined;
  Promo: undefined;
  Transaction: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {marginTop: 3},
        tabBarItemStyle: {paddingVertical: 6},
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={24} color={focused ? 'green' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Promo"
        component={PromoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SimpleIcon
              name="tag"
              size={24}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="list-alt"
              size={24}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FaIcon
              name="user-o"
              size={24}
              color={focused ? 'green' : 'gray'}
            />
          ),
          tabBarLabel: 'Akun',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
