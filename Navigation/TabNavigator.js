import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import colors from '../Global/colors'
import OrdersStack from './OrdersStack'
import TabIcon from '../Components/TabIcon'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
      <NavigationContainer>
          <View style={{flex: 1, backgroundColor: colors.customPrimaryBackground}}>
              <Tab.Navigator
                screenOptions={{
                  headerShown:false,
                  tabBarShowLabel:false,
                  tabBarStyle: styles.tabBar
                }}
              >
                <Tab.Screen
                   name="ShopStack"
                   component={ShopStack}
                   options={{
                    tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" color={focused ? "black" : "gray"}/>
                   }}
                />
                <Tab.Screen 
                  name="CartStack" 
                  component={CartStack}
                  options={{
                    tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" color={focused ? "black" : "gray"}/> 
                   }}
                   />
                   <Tab.Screen 
                  name="OrdersStack" 
                  component={OrdersStack}
                  options={{
                    tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" color={focused ? "black" : "gray"}/> 
                   }}
                   />
              </Tab.Navigator>
          </View>
      </NavigationContainer>
  )
  
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor: colors.customPrimaryBackground,
      elevation:4,
      bottom:0, 
      left:0, 
      right:0, 
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      height:90,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }
})