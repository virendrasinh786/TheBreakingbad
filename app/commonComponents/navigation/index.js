import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Detail from '../../screen/detail';
import Favourite from '../../screen/favourite';
import Home from '../../screen/home';

const Navigation = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, title: "" }} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false, title: "" }} />
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false, title: "" }} />
    </Stack.Navigator>
  )
}

export default Navigation;