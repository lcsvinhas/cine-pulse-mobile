import { useState } from 'react'
import { View, Text, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import api from '../../services/api'
import { styles } from './style'
import { cores } from '../../styles/cores'
import { Feather } from '@expo/vector-icons'

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
    <View style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/LOGO PULSE SEM FUNDO.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>


        <Feather name="user" size={100} color={cores.footer} style={{ margin: 0, textAlign: 'center' }} />

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
    </View>
  )
}