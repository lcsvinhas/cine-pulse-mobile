import { useState } from 'react'
import { View, Text, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import api from '../../services/api'
import { styles } from './style'

export default function Cadastro({ navigation }: any) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert("Preencha os campos de cadastro corretamente!")
      return
    }

    try {
      const response = await api.post('usuarios', {
        nome,
        email,
        senha
      })

      Alert.alert("Cadastro realizado com sucesso!")

      navigation.navigate('Login')

    } catch (error) {
      console.error(error)
      Alert.alert("Erro ao cadastrar.")
    }
  }

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}