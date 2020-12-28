import React from 'react'
import { View, StyleSheet} from 'react-native'
import Quadrado from './quadrado'

export default () => {
   return (
      <View style = {style.FlexV2}>
         <Quadrado cor = '' />
         <Quadrado cor = '#F00' />
      </View>
   )
}

const style = StyleSheet.create({
   FlexV2: {
      flex: 1,
      width: '100%',
      alignItems: "flex-end",
      justifyContent: "space-evenly",
      backgroundColor: '#000',
   }
})