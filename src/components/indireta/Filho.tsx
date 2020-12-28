import React from 'react'
import { Button } from 'react-native'

export default (props: { min: number; max: number; funcao: (arg0: number, arg1: string) => void }) => {
   
   function gerarNumero(min: number, max: number) {
      const fator = max - min + 1
      return parseInt(Math.random() * fator + min)
   }

   return (
      <Button
         title = "Executar"
         onPress = {function() {
            const n = gerarNumero(props.min, props.max)
            props.funcao(n, 'O valor é: ')
         }}
      />
   )
}