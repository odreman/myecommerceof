// Components/SearchBar.js

import { Pressable, StyleSheet, TextInput,View } from 'react-native';
import React, { useState } from 'react';
import colors from '../Global/colors';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
    const [ input, setInput ] = useState('');

    const search = () => {
        onSearch(input);
    }

    const clearInput = () => {
        setInput('');
        onSearch('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setInput}
                onSubmitEditing={search}
                placeholder="Search product"
                value={input}
            />
            <Pressable onPress={search}>
                <AntDesign name="search1" size={24} color="black" />
            </Pressable>
            <Pressable onPress={clearInput}>
                <Entypo name="circle-with-cross" size={24} color="black" />
            </Pressable>
        </View>
    );

};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: colors.customSecondaryBackground,
        borderRadius: 10,
    },
});