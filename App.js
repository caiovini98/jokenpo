import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      resultado: ''
    };  

    this.pedra = this.pedra.bind(this);
    this.papel = this.papel.bind(this);
    this.tesoura = this.tesoura.bind(this);
    this.imagem = [
      require('./src/pedra.png'),
      require('./src/papel.png'),
      require('./src/tesoura.png'),
    ]
    
  }

  pedra() {
    let numeroAleatorio = Math.floor(Math.random() * this.imagem.length);
    this.setState({
      textoFrase: this.imagem[numeroAleatorio]
    });
    if (numeroAleatorio == 0) {
      this.setState({
        resultado: 'Ops! Houve empate :|'
      });
    } else if (numeroAleatorio == 1) {
      this.setState({
        resultado: 'Vish! Você perdeu :('
      });
    } else {
      this.setState({
        resultado: 'Aê! Você ganhou :)'
      });
    }
  }

  papel() {
    let numeroAleatorio = Math.floor(Math.random() * this.imagem.length);
    this.setState({
      textoFrase: this.imagem[numeroAleatorio]
    });
    if (numeroAleatorio == 0) {
      this.setState({
        resultado: 'Aê! Você ganhou :)'
      });
    } else if (numeroAleatorio == 1) {
      this.setState({
        resultado: 'Ops! Houve empate :|'
      });
    } else {
      this.setState({
        resultado: 'Vish! Você perdeu :('
      });
    }
  }

  tesoura() {
    let numeroAleatorio = Math.floor(Math.random() * this.imagem.length);
    this.setState({
      textoFrase: this.imagem[numeroAleatorio]
    });
    if (numeroAleatorio == 0) {
      this.setState({
        resultado: 'Vish! Você perdeu :('
      });
    } else if (numeroAleatorio == 1) {
      this.setState({
        resultado: 'Aê! Você ganhou :)' 
      });
    } else {
      this.setState({
        resultado: 'Ops! Houve empate :|' 
      });
    }
  }

  render() {
    return(
      <View style = {style.container}>
        <Text style = {style.title}>Jokenpô</Text>
        <Text style = {style.subTitle}>Game created by: Caio Alves</Text>
        <Text style = {style.opcao}>Escolha uma opção:</Text>
          <View style = {style.box1}>
          <TouchableOpacity style = {style.botaoBox} onPress={this.pedra}>
            <Text style = {style.ppt}>PEDRA</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {style.botaoBox} onPress={this.papel}>
            <Text style = {style.ppt}>PAPEL</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {style.botaoBox} onPress={this.tesoura}>
            <Text style = {style.ppt} >TESOURA</Text>
          </TouchableOpacity>
          
        </View>

        <Image 
        source = {this.state.textoFrase}
        style = {style.img}
        />

        <Text style = {style.resultadoFinal}> {this.state.resultado} </Text>
      </View>
    );
  }
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    color: '#48D1CC',
    fontSize: 42,
    marginTop: 18,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  subTitle: {
    color: '#48D1CC',
    fontSize: 17,
    textAlign: 'center',
  },
  opcao: {
    color: '#40E0D0',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 18,
  },
  box1: {
    
    flexDirection: 'row',
    margin: 12,
    alignItems: 'center'
  },
  botaoBox: {
    backgroundColor:'#40E0D0',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
    width: 110,
    height: 50
  },
  ppt: {  
    padding: 10,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: "bold"
  },
  img: {
    marginTop: 10,
    width: 100,
    height: 100
  },
  resultadoFinal: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#40E0D0',
    marginTop: 10,
  }
})

export default App;
