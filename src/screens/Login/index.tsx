import { View, Text, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import { styles } from './style'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api'
import { Feather } from '@expo/vector-icons'
import { cores } from '../../styles/cores'

export default function Login({ navigation }: any) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        if (!username || !password) {
            Alert.alert("Preencha os campos de login corretamente!")
            return
        }

        try {
            const response = await api.post('auth/login', {
                username,
                password
            })

            const { token, id } = response.data

            await AsyncStorage.setItem('token', token)
            await AsyncStorage.setItem('userId', id.toString());

            Alert.alert("Login realizado com sucesso!")

            navigation.replace('AppRouter')

        } catch (error) {
            console.error(error)
            Alert.alert("Erro ao fazer login. Verifique suas credenciais.")
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
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <Feather name="user" size={100} color={cores.footer} style={{ margin: 0, textAlign: 'center' }} />

                <Text style={styles.titulo}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.linkTexto}>Ainda não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}
