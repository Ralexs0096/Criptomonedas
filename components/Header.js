import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import { useFonts } from '@expo-google-fonts/inter'

const Header = () => {
  let [fontsLoaded] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
  })

  return <Text style={styles.encabezado}>Criptomonedas</Text>
}

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
  },
})

export default Header
