import * as React from 'react';
import {View, Text, Image, Dimensions, Button, StyleSheet, ScrollView} from 'react-native';
import { useCart } from './CartContext';

const ITEM_WIDTH = Dimensions.get('window').width / 2

export default function ProductDetail({route}) {
    const {product, imageUrl} = route.params;
    const {addToCart} = useCart();
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <View style={styles.productDetail}>
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                </View>
            </View>

            <View style={styles.addButton}>
                <Button title="Add to Cart" onPress={() => addToCart(product, imageUrl)} />
            </View>

            <Text style={styles.productDescription}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </ScrollView>
    )
}

/* alignItems: 'flex-start'
 */
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10, 
        padding: 20,
        borderRadius: 10,
        flex: 1, 
        
    },

    imageContainer: {
        marginBottom: 15, 
        width: ITEM_WIDTH,
        alignItems: 'center'
    },

    image: {
        width: ITEM_WIDTH, 
        height: ITEM_WIDTH,
        marginBottom: 10,
        borderRadius: 10,
    },

    productDetail: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around', 
        width: '100%'
    },

    productTitle: {
        fontSize:16, 
        fontWeight: 'bold',
    },

    productPrice: {
        fontSize:16, 
        fontWeight: 'bold', 
        marginRight: 15,
    },

    addButton: {
        marginTop: 20,
        width: '35%',
    },

    productDescription: {
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'justify',
    }
})