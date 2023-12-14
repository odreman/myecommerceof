// Components/Header.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../Global/colors';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.customPrimary, 
        height: 100, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
        paddingBottom: 10, 
        paddingLeft: 20, 
    },
    headerText: {
        color: colors.customSecondaryText, 
        fontSize: 18,
        paddingBottom: 10,
        fontFamily: 'Epilogue-Regular'
    }
});

export default Header;