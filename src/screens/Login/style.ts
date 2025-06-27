import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    botao: {
        backgroundColor: '#6371BF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
