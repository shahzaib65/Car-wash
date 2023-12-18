import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme';

const Tab = createBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from "react-native-vector-icons/Feather"
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Subscription from './Subscription';
import Booking from './Booking';
import Chat from './Chat';

export default function Dashboard () {
    return (
      <Tab.Navigator screenOptions={{}}>
          <Tab.Screen name="home" component={HomeScreen}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Feather
                name="home"
                color={colors.primary}
                size={30}
              />
            ),
          }}
         />


  <Tab.Screen name="Subscription" component={Subscription}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'seal',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="seal"
                color={colors.primary}
                size={30}
              />
            ),
          }}
         />
        <Tab.Screen name="Booking" component={Booking}
         options={{
            tabBarLabel: 'Booking',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={colors.primary}
                size={30}
              />
            ),
          }}
         />

<Tab.Screen name="Support" component={Chat}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Support',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="face-agent"
                color={colors.primary}
                size={30}
              />
            ),
          }}
         />
  
  <Tab.Screen name="account" component={Profile}
         options={{
          
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={colors.primary}
                size={30}
              />
            ),
          }}
         />
  
      </Tab.Navigator>
    );
  };
