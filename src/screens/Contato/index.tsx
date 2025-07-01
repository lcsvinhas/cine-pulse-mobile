import { View, Text, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import { styles } from './style'
import { useState } from 'react'
import api from '../../services/api'
import { Feather } from '@expo/vector-icons'
import { cores } from '../../styles/cores'

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    async function handleSave() {
        if (!nome || !email || !mensagem) {
            Alert.alert("Preencha todos os campos!")
            return
        }

        try {
            const response = await api.post('contatos', {
                nome,
                email,
                mensagem
            })

            Alert.alert("Mensagem enviada com sucesso!")

            setNome("")
            setEmail("")
            setMensagem("")

        } catch (error) {
            console.error(error)
            Alert.alert("Erro ao enviar mensagem.")
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
                <Feather name="message-square" size={100} color={cores.footer} style={{ margin: 0, textAlign: 'center' }} />

                <Text style={styles.titulo}>Contato</Text>

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
                    style={styles.inputMensagem}
                    placeholder="Mensagem"
                    value={mensagem}
                    onChangeText={setMensagem}
                    autoCapitalize="sentences"
                />

                <TouchableOpacity style={styles.botao} onPress={handleSave}>
                    <Text style={styles.botaoTexto}>Enviar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}