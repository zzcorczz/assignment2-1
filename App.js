import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import { Styles } from './Components/Styles';
import allActivities from './Screens/allActivities';

const stack = createNativeStackNavigator();




export default function App() {

  return (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen options={Styles.screenStyles}
        name='start'
        component={Start}
      />
      <stack.Screen
        name='allActivies'
        componet={allActivities}
      />
    </stack.Navigator>
  </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
