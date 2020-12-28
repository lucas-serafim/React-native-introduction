import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {

   state = {
      qtdNumeros: this.props.qtdNumeros,
      numeros: []
   }


   alterarQtdNumero = (qtd: any) => {
      this.setState({ qtdNumeros: +qtd })
   }

   gerarNumeroNaoContido = nums => {
      const novo = parseInt(Math.random() * 60) + 1
      return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
   }

   gerarNumeros = () => {
      const numeros = Array(this.state.qtdNumeros)
         .fill()
         .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
         .sort((a: number, b: number) => a - b)
      this.setState({ numeros })
   }

   /*gerarNumeros = () => {
      const { qtdNumeros } = this.state
      const numeros: number[] = []

      for(let i = 0; i < qtdNumeros; i++) {
         numeros.push(this.gerarNumeroNaoContido(numeros))
      }
      
      numeros.sort((a, b) => a - b)
      this.setState({ numeros })
   }*/

   exibirNumeros = () => {
      const nums = this.state.numeros
      return nums.map(num => {
         return <MegaNumero key = {num} num = {num} />
      })
   }

   render() {
      return (
         <>
            <Text style = {Estilo.fontG}>
               Gerador de Mega-Sena 
            </Text>

            <TextInput 
               keyboardType = {'numeric'}
               style = {{borderBottomWidth: 1}}
               placeholder = "Quantidade de números"
               value = {`${this.state.qtdNumeros}`}
               onChangeText = {this.alterarQtdNumero}
            />
            <Button 
               title = 'Gerar'
               onPress = {this.gerarNumeros}
            />
            <View style = {{
               marginTop: 20,
               flexDirection: 'row',
               flexWrap: 'wrap',
               justifyContent: 'center'
            }}>
               {this.exibirNumeros()}
            </View>
         </>
      )
   }
}