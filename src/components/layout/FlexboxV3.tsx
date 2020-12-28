import React from 'react'
import { View, StyleSheet} from 'react-native'
import Quadrado from './quadrado'

export default () => {
   return (
      <View style = {style.FlexV3}>
         <Quadrado cor = '' />
         <Quadrado cor = '#F00' />
      </View>
   )
}

const style = StyleSheet.create({
   FlexV3: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 350,
      width: '100%',
      backgroundColor: '#000',
   }
})