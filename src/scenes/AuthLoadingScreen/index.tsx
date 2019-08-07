import React from 'react'
import styles from './styles'
import {View, Text, TouchableOpacity} from 'react-native'

const AuthLoadingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
    </View>
  )
}

export default AuthLoadingScreen
