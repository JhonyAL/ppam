import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Xbox from './pages/Xbox'
import Nintendo from './pages/Nintendo'
import Ps from './pages/Ps'

import xboxIco from './assets/xbox.png'
import psIco from './assets/ps.png'
import nintendoIco from './assets/nintendo.png'


const Tab = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Xbox" component={Xbox} options={{
          tabBarIcon: () => (
            <Image source={xboxIco} style={styles.buttonIcon}/>
          )
        }} />
          <Tab.Screen name="PlayStation" component={Ps} options={{
            tabBarIcon: () => (
              <Image source={psIco} style={styles.buttonIcon}/>
            )
          }} />
        <Tab.Screen name="Nintendo" component={Nintendo} options={{
          tabBarIcon: () => (
            <Image source={nintendoIco} style={styles.buttonIcon}/>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    width: 25,
    height: 25
  }
});
