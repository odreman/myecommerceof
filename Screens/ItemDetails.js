import { StyleSheet, Text, View, Image, Pressable,useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../Global/colors'
import Header from '../Components/Header'
import allProducts from '../Data/products.json'

const ItemDetails = ({ route }) => {
  const {item} = route.params
  const [product, setProduct] = useState(item)
  const images = product.image ? product.image : 'https://via.placeholder.com/150'

  useEffect(() => {
    const product = allProducts.find(product => product.id === item.id)
    setProduct(product)
  }, [item])  

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"start",
        alignItems:"center",
        backgroundColor: colors.customPrimaryBackground,
        padding: 10,
    },
    content:{
      width:"100%"
    },
    image:{
      width:"100%",
      height:300
    },
    containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:20,
      fontWeight:"bold",
      color: 'black',
      fontFamily: 'Epilogue-Regular',
     },
     description: {
      fontSize: 16,
      color: 'gray',
      fontFamily: 'Epilogue-Regular',
     },
     price:{
      fontSize:30,
      color: 'black',
      fontFamily: 'Epilogue-Regular',
     },
     buyNow:{
      backgroundColor: 'white',
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"black",
      fontFamily: 'Epilogue-Regular',
     }
})