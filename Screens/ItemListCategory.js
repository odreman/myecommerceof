// ItemListCategory.js

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../Components/Header'; 
import Search from '../Components/Search'; 
import Categories from '../Components/Categories'; 
import colors from '../Global/colors'; 
import allProducts from '../Data/products.json';
import ProductItem from '../Components/ProductItem'

const ItemListCategory = ({category}) => {
    
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (category){
            const products = allProducts.filter(product => product.category === category);
            const productsfiltered = products.filter(product => product.title.includes(keyword));
            setProducts(productsfiltered);
        }else {
            const productsfiltered = allProducts.filter(product => product.title.includes(keyword));
            setProducts(productsfiltered);
        }
    }, [category, keyword]);

    return (
        <>
            <Header title="Categorías ||  Productos" />
            <Search onSearch={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem item={item} />}
                    keyExtractor={item => item.id}
                    style= {styles.list}
                />
            </View>
        </>
    );
};

export default ItemListCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customPrimaryBackground,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    list: {
        width: '100%',
    }
})
