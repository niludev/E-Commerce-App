import * as React from 'react';
import {View, Text} from 'react-native';

export default function ShoppingCard({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                style={{fontSize:24, fontWeight: 'bold'}}
                onPress={() => navigation.navigate('Home')}>
                Shopping Screen
            </Text>
        </View>
    )
}