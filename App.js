import React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

export default function App() {
  const [gas, setGas] = useState('');
  const [etanol, setEtanol] = useState('');
  const [res, setRes] = useState('');

  const handleCalcular = () => {
    if (!gas || gas <= 0 || !etanol || etanol <= 0) {
      Alert.alert('Atenção', 'Valor da gasolina e etanol são obrigatório');
    } else {
      let pct = Math.round((etanol / gas) * 100);
      if (pct < 70) {
        setRes('Recomendamos: Etanol');
      } else {
        setRes('Recomendamos: Gasolina');
      }
    }
  }

  return (
    <Container>
      <Header title="Calculadora Flex" />
      <Body>
        <Input
          label="Preço Gasolina"
          value={gas}
          onChangeText={gas => setGas(gas)}
          style={styles.input}
        />
        <Input
          label="Preço Etanol"
          value={etanol}
          onChangeText={etanol => setEtanol(etanol)}
          style={styles.input}
        />
        <Button
          onPress={handleCalcular}
          title="Calcular"
          color="#841584"
        />
        <Text style={styles.text}>
          {res}
        </Text>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({  
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8
  },
  text: {
    textAlign: 'center',
    margin: 8
  },
  error: {
    textAlign: 'center',
    margin: 8,
    color: 'red'
  }
})
