import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ShoppingCard from './screens/ShoppingCard';

// Screen names
const HomeName = 'Home';
const ProductLisName = 'Producs';
const ShoppingCardName = 'Card';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={HomeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === HomeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === ProductLisName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === ShoppingCardName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },

                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: {paddingBottom: 5},
                tabBarStyle: {padding: 4}
            })}

            >


            <Tab.Screen name={HomeName} component={HomeScreen} />
            <Tab.Screen name={ProductLisName} component={ProductListScreen} />
            <Tab.Screen name={ShoppingCardName} component={ShoppingCard} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}