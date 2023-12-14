import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'
import colors from '../Global/colors'

const Categories = () => {
  return (
    <View styles= {styles.container}>
        <FlatList
            styles= {styles.list}
            renderItem={({item}) => <CategoryItem category={item} />}
            data={categories}
            keyExtractor={category => category}
        />
    </View>
  )
}

export default Categories

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
