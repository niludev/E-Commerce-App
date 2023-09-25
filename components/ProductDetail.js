import * as React from 'react';
import {View, Text, Image, Dimensions, Button} from 'react-native';
import { useCart } from './CartContext';

const ITEM_WIDTH = Dimensions.get('window').width / 2

export default function ProductDetail({route}) {
    const {product, imageUrl} = route.params;
    const {addToCart} = useCart();
    
    return (
        <View style={{margin: 5, flex: 1, alignItems: 'flex-start'}}>
            <View style={{marginBottom: 15, width: '50%'}}>
                <Image source={{uri: imageUrl}} style={{width: ITEM_WIDTH - 20, height: ITEM_WIDTH - 20}} />
                <View style={{flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', width: '100%'}}>
                    <Text style={{fontSize:16, fontWeight: 'bold'}}>{product.title}</Text>
                    <Text style={{fontSize:16, fontWeight: 'bold', marginRight: 15}}>{product.price}</Text>
                </View>
            </View>

            <Button title="Add to Cart" onPress={() => addToCart(product, imageUrl)} />

            <Text style={{marginTop: 10}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </View>
    )
}