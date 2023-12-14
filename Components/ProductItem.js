import React from 'react'
import colors from '../Global/colors'
import{
    Image,
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native';

const ProductItem = ( { item, setProductDetailId} ) => {
    return (
      <Pressable style={styles.card}>
          <Image
              style={styles.image}
              resizeMode='stretch'
              source={{ uri: item.images ? item.images[0] : null }}
          />
          <View style={styles.titleContainer}>
              <Text style={styles.text}>{item.title}</Text>
          </View>
      </Pressable>
    )
  }
  
  export default ProductItem
  
  const styles = StyleSheet.create({
      card: {
          backgroundColor: colors.customSecondaryBackground,
          borderRadius: 10,
          elevation: 5,
          padding: 0, 
          margin: 10,
          zIndex: 1,
          overflow: 'hidden', 
          height: 230, 
      },
      image: {
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '100%',
          width: '100%',
      },
      titleContainer: {
          position: 'absolute', 
          left: 0, 
          right: 0, 
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          padding: 10, 
      },
      text: {
          color: colors.customPrimaryText,
          fontSize: 18,
          textAlign: 'center',
          fontFamily: 'Epilogue-Regular'
      },
  })