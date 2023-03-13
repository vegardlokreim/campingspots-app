import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from './screens/Location';
import Home from './screens/Home';
import AddLocation from './screens/AddLocation';
import AddLocation2 from './screens/AddLocation2';

const AddStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Legg til location" component={AddLocation} />
            <Stack.Screen name="Step2" component={AddLocation2} initialParams={{ markerCoords: '' }} />
        </Stack.Navigator>
    )
}

export default AddStack