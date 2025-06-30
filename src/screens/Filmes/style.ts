import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
    grid: {
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: cores.card,
        borderRadius: 12,
        padding: 8,
        alignItems: 'center',
        elevation: 3,
        shadowColor: cores.sombra,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    capa: {
        width: 120,
        height: 180,
        borderRadius: 8,
        marginBottom: 8,
        resizeMode: 'cover',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: cores.texto,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: cores.modal,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    modalContainer: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: cores.card,
        borderRadius: 12,
        padding: 20,
    },
    modalTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalTexto: {
        fontSize: 16,
        marginBottom: 6,
    },
    modalFechar: {
        marginTop: 16,
        backgroundColor: cores.header,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalFecharTexto: {
        color: cores.fundo,
        fontSize: 16,
    },
    usuarioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    },
    oláUsuario: {
        fontSize: 22,
        fontWeight: '600',
        color: cores.texto,
        marginVertical: 16,
        textAlign: 'left',
        letterSpacing: 0.5,
        textShadowColor: cores.sombra,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
})


