import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Location from './screens/Location';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack from './Stack';
import Browse from './screens/Browse';

import {
  HomeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  PlusIcon,
  HeartIcon
} from "react-native-heroicons/outline";
import AddLocation from './screens/AddLocation';


export default function App() {
  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        "tabBarActiveTintColor": "#497F78",
        "tabBarInactiveTintColor": "gray",
      }}>
        <Tab.Screen name="Hjem" component={Stack} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} />
          ),
        }} />

        <Tab.Screen name="Søk" component={Browse} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon color={color} />
          ),

        }} />
        <Tab.Screen name="Legg til" component={AddLocation} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <PlusIcon color={color} />
          ),

        }} />
        <Tab.Screen name="Favoritter" component={Browse} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <HeartIcon color={color} />
          ),

        }} />

        <Tab.Screen name="Profil" component={Browse} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UserCircleIcon color={color} />
          ),

        }} />

      </Tab.Navigator>



    </NavigationContainer>
  );
}

