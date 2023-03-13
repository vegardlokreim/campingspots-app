import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stack from './Stack';
import Browse from './screens/Browse';

import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  PlusIcon,
  HeartIcon
} from "react-native-heroicons/outline";

import AddStack from './AddStack';


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
        <Tab.Screen name="Legg til" component={AddStack} options={{
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

