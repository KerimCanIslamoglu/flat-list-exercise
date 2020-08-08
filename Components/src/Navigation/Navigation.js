import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateList from '../Screens/CreateList'
import List from '../Screens/List'

import Button from '../../Button'

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={List}
                    options={({ navigation, route })=>({
                        headerRight: () => (
                            <TouchableOpacity style={{
                                backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width:50,borderRadius: 5
                               
                            } } onPress={() => navigation.navigate('CreateList')}
                               >
                                <Text style={{ color: 'black', fontSize:30 }}>+</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen name="CreateList" component={CreateList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
