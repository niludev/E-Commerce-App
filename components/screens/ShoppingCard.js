import * as React from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';
import { useCart } from '../CartContext';

export default function ShoppingCard({route}) {
    const {imageUrl} = route?.params || {};
    const {cart, removeFromCart, addToCart} = useCart()
    return (
        <ScrollView style={styles.container}>
           {cart.map(item => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source ={{uri: item.imageUrl}} style={styles.itemImage}/>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
                        <View style={styles.space} />
                        <Button title="Add to Cart" onPress={() => addToCart(item, imageUrl)} />
                    </View>
                </View>
           ))}
        </ScrollView>
    )
}
/* backgroundColor: '#fff'
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },

    itemContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    itemImage: {
        width:100, 
        height:100,
        borderRadius: 8,
        marginBottom: 10
    },

    itemTitle: {
        fontSize:24, 
        fontWeight: 'bold',
        marginBottom: 5
    },

    itemQuantity: {
        fontSize:18, 
        margin: 5
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
    },

    space: {
        width: 10
    }
})