import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Global/colors'   
import { Entypo } from '@expo/vector-icons'; 

const CardItem = ({children, style, item}) => {
  return (
  <View style = {{...styles.container, ...style}}>
    <View style={styles.textContainer}>
      <Text style={styles.text1}>{item.title}</Text>
      <Text style={styles.text2}>{item.brand}</Text>
      <Text style={styles.text2}>$ {item.price}</Text>
    </View>
    <Entypo name='trash' size={25} color="black"/>
    {children}
  </View>
  )
}

export default CardItem 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.customPrimaryBackground,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    margin: 10,
    zIndex: 1,
  },
  textContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    padding: 10, 
  },
  text1: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Epilogue-Regular',
  },
  text2: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Epilogue-Regular',
  },
})