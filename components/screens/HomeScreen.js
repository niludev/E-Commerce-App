import * as React from 'react';
import {View, Text} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:24, fontWeight: 'bold'}}>
                Home Screen
            </Text>
        </View>
    )
}