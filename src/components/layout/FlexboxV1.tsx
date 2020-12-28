import React from 'react'
import { View, StyleSheet} from 'react-native'
import Quadrado from './quadrado'

export default () => {
   return (
      <View style = {style.FlexV1}>
         <Quadrado cor = '' />
         <Quadrado cor = '#F00' />
      </View>
   )
}

const style = StyleSheet.create({
   FlexV1: {
      flexGrow: 1,
      justifyContent: "flex-start",
      backgroundColor: '#000',
   }
})