import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Home from '../Screens/Home'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetails'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Categorias" :
                                        route.name === "Category" ? route.params.category :
                                        "Detalle"
                    }               />
                }
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategory} />
        <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack