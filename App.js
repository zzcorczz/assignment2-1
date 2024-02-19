import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import { Styles } from './Components/Styles';
import AllActivities from './Screens/AllActivities';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpecialActivities from './Screens/SpecialActivities';
import ContextProvider from './Components/ActivitiesList';
import AddAnActivity from './Screens/AddAnActivity';


const stack = createNativeStackNavigator();

const stack2 = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabScreen () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='AllActivities'
        component={AllActivities}
      />
      <Tab.Screen
        name='SpecialActivities'
        component={SpecialActivities}
      />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <ContextProvider>
        <stack.Navigator>
          <stack.Screen 
            options={Styles.screenStyles}
            name='start'
            component={Start}
          />
          <stack.Screen 
            options={Styles.activities}
            name='Tab'
            component={TabScreen}
          />
          <stack.Screen
            options={Styles.addScreen}
            name='Add'
            component={AddAnActivity}
          />
        </stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
};
