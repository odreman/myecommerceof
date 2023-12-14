import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Global/colors'   

const Card = ({children, style}) => {
  return (
    <View style = {{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.customPrimaryBackground,
        borderRadius: 10,
        elevation: 5,
        padding: 20,
        margin: 10,
        zIndex: 1,
    },  

})