// Home.js

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Header from '../Components/Header'; 
import Categories from '../Components/Categories'; 
import colors from '../Global/colors'; 

const Home = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                <Categories 
                    navigation={navigation}
                    route={route}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customPrimaryBackground,
    },
    categoriesContainer: {
        flex: 1,
        width: '100%',
    }
});