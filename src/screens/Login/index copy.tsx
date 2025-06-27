import { View, Text, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { styles } from './style'
import { useState } from 'react'

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function handleSave(): void {
        if (!nome || !email) {
            Alert.alert("Preencha os campos corretamente!")
            return
        }

        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)

        Alert.alert("Contato enviado com sucesso!")

        setNome("")
        setEmail("")
    }

    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <Text style={styles.titulo}>Entre em Contato</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.botao} onPress={handleSave}>
                <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}