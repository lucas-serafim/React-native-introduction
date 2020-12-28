import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

import Produtos from './produtos'

export default () => {
   function obterLista() {
      return produtos.map(p =>{
         return <Text key = {p.id}>{p.id}) {p.nome} preço R$ {p.preco}</Text>
      })
   }
   
   return (
      <>
         <Text style = {estilo.fontG}>
            Lista de Produtos
         </Text>
         {obterLista()}
      </>
   )
}