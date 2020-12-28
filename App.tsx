import React from 'react';
import { View, StyleSheet ,StatusBar, SafeAreaView } from 'react-native';

import Mega from './src/components/mega/Mega'
//import FlexboxV4 from './src/components/layout/FlexboxV4'
//import FlexboxV3 from './src/components/layout/FlexboxV3'
//import FlexboxV2 from './src/components/layout/FlexboxV2'
//import DigiteSeuNome from './src/components/DigiteSeuNome'
//import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2'
//import ListaProdutos from './src/components/produtos/ListaProdutos'
//import UsuarioLogado from './src/components/UsuarioLogado'
//import Pai from './src/components/relacao/Pai'
//import Filho from './src/components/relacao/FIlho'
//import ParImpar from './src/components/ParImpar'
//import Diferenciar from './src/components/Diferenciar'
//import ContadorV2 from './src/components/contator/ContadorV2'
//import Pai from './src/components/indireta/Pai'
//import Pai from './src/components/direta/Pai'
//import Contador from './src/components/Contador'
//import Botao from './src/components/Botao'
//import Titulo from './src/components/Titulo'
//import Aleatorio from './src/components/Aleatorio'
//import MinMax from './src/components/MinMax'
//import X, { Comp1, Comp2 } from './src/components/Multi'
//import Primeiro from './src/components/Primeiro'

export default () => {
   return (
      <SafeAreaView style = {style.App}>
         <Mega qtdNumeros = {7}/>
        {/*
         <FlexboxV4 />
         <FlexboxV3 />
         <FlexboxV2 />
         <FlexboxV1 />
         <DigiteSeuNome />
         <ListaProdutosV2 />
         <ListaProdutos />
        <UsuarioLogado usuario = { {nome: 'Gui', email: 'gui@gui.com'} }/>
         <UsuarioLogado usuario = { {email: 'gui@gui.com'} }/>
         <UsuarioLogado usuario = { {nome: 'gui'} }/>
         <UsuarioLogado usuario = {{}}/>
         <UsuarioLogado usuario = {null}/>
         <Pai>
            <Filho nome = "Bia" sobrenome = "Arruda"/>
            <Filho nome = "Carlos" sobrenome = "Arruda"/>
         </Pai>

         <Pai>
            <Filho nome = "Ana" sobrenome = "Silva"/>
            <Filho nome = "Julia" sobrenome = "Silva"/>
         </Pai>
         <ParImpar num = {3}/>
         <Diferenciar />
         <ContadorV2/>
         <Pai />
         <Pai />
         <Contador inicial = {100} passo = {13}/>
         <Contador />
        <Titulo principal = "Cadastro Produto" 
         secundario = "Tela de Cadastro do Produto"/>
         <Aleatorio min = {10} max = {20}/>
         <MinMax min = {3} max = {20}/>
         <X></X>
         <Comp1></Comp1>
         <Comp2></Comp2>
         <Primeiro></Primeiro>*/}

         <StatusBar></StatusBar>
      </SafeAreaView>
   )
}

const style = StyleSheet.create({
   App: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
   }
})