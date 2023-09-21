import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import ProductDetail from '../ProductDetail';

const products = [
    {id: 1, title: 'Item 1', price: '20$', image: '../../assets/Products/cactus-galina-n-miziNqvJx5M-unsplash.jpg'},
    {id: 2, title: 'Item 2', price: '15$', image: '../../assets/Products/cactus-stephanie-harvey-N9lmtlOuaDM-unsplash.jpg'},
    {id: 3, title: 'Item 3', price: '2.5$', image: '../../assets/Products/cup-cake-cristina-matos-albers-Ltv7a5m8i4c-unsplash.jpg'},
    {id: 4, title: 'Item 4', price: '5$', image: '../../assets/Products/decoration-pink-mae-mu-GnWKTJlMYsQ-unsplash.jpg'},
    {id: 5, title: 'Item 5', price: '15$', image: '../../assets/Products/decoration-rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg'},
    {id: 6, title: 'Item 6', price: '200$', image: '../../assets/Products/glasses-giorgio-trovato-K62u25Jk6vo-unsplash.jpg'},
    {id: 7, title: 'Item 7', price: '500$', image: '../../assets/Products/guitar-rock-zhou--6cScQvixFY-unsplash.jpg'},
    {id: 8, title: 'Item 8', price: '200$', image: '../../assets/Products/headphone-c-d-x-PDX_a_82obo-unsplash.jpg'},
    {id: 9, title: 'Item 9', price: '150$', image: '../../assets/Products/headphone-kiran-ck-LSNJ-pltdu8-unsplash.jpg'},
    {id: 10, title: 'Item 10', price: '50$', image: '../../assets/Products/shoes-irene-kredenets-DDqxX0-7vKE-unsplash.jpg'},
    {id: 11, title: 'Item 11', price: '60$', image: '../../assets/Products/shoes-irene-kredenets-KStSiM1UvPw-unsplash.jpg'},
    {id: 12, title: 'Item 12', price: '80$', image: '../../assets/Products/sport-shoes-domino-164_6wVEHfI-unsplash.jpg'},
    {id: 13, title: 'Item 13', price: '15$', image: '../../assets/Products/stool-ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg'},
    {id: 14, title: 'Item 14', price: '150$', image: '../../assets/Products/watch-rachit-tank-2cFZ_FB08UM-unsplash.jpg'},
]; 

/* contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}*/    


const ITEM_WIDTH = Dimensions.get('window').width / 3;


function ProductListScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList 
                contentContainerStyle={{width: '100%'}}
                data={products}  
                numColumns={3}  
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={{width: ITEM_WIDTH, padding: 5 }}
                        onPress={() => navigation.navigate('ProductDetail', {
                            product: item, 
                            imageUrl: `https://picsum.photos/${item.id*100}`
                        })}
                    >
                        <Image source={{uri: `https://picsum.photos/${item.id*100}`}} style={{margin: 5, marginTop: 20, width: ITEM_WIDTH - 20, height: ITEM_WIDTH - 20}} />

                        <View style={{flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', width: '100%'}}>
                            <Text style={{ marginLeft: 5 }}>{item.title}</Text>
                            <Text style={{ marginRight: 5 }}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            >  
            </FlatList>
        </View>
    )
}

const ProductStack = createStackNavigator();

function ProductList() {
    return (
        <ProductStack.Navigator initialRouteName='ProductListScreen'>
            <ProductStack.Screen name='ProductListScreen' component={ProductListScreen} />
            <ProductStack.Screen name='ProductDetail' component={ProductDetail} />
        </ProductStack.Navigator>
    )
}


export default ProductList;