import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: cores.fundo,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: cores.primaria,
    },
    input: {
        height: 50,
        borderColor: cores.secundaria,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: cores.gaveta,
        color: cores.texto,
    },
    botao: {
        backgroundColor: cores.primaria,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    botaoTexto: {
        color: cores.fundo,
        fontSize: 16,
        fontWeight: 'bold',
    },
})