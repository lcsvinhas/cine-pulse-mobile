import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './style'
import { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (!username || !password) {
            Alert.alert("Erro", "Preencha todos os campos.")
            return
        }

        Alert.alert("Login", `Bem-vindo, ${username}!`)
        setUsername('')
        setPassword('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
