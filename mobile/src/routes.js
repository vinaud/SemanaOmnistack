import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

const appStack = createStackNavigator();

export default function()
{
    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions = {{headerShown: false}}>
                <appStack.Screen name = "Incidents" component = {Incidents} />
                <appStack.Screen name = "Detail" component = {Detail} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}