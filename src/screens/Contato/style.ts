import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: cores.fundo
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: cores.cardFundo,
        borderWidth: 1,
        borderColor: cores.cardSombra,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    inputMensagem: {
        height: 150,
        backgroundColor: cores.cardFundo,
        borderWidth: 1,
        borderColor: cores.cardSombra,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    botao: {
        backgroundColor: cores.footer,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    botaoTexto: {
        color: cores.cardFundo,
        fontWeight: 'bold'
    }
})
