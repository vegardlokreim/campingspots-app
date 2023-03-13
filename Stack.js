import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from './screens/Location';
import Home from './screens/Home';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Location" component={Location} options={{ headerTitle: 'New Screen' }} initialParams={{ id: 'default_id' }} />
        </Stack.Navigator>
    )
}

export default Stack