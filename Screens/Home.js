// Home.js

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Header from '../Components/Header'; 
import Categories from '../Components/Categories'; 
import colors from '../Global/colors'; 

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Switch y elementos externos" />
            <View style={styles.categoriesContainer}>
                <Categories/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

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