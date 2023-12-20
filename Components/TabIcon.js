import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"

const TabIcon = ({icon, label, color}) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={40} color={color}/>
      <Text style={{...styles.text, color}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        textAlign:"center"
    }
})