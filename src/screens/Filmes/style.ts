import { StyleSheet } from 'react-native'
import { cores } from '../../styles/cores'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.fundo
    },
    grid: {
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: 'white',
        borderColor: cores.cardSombra,
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        alignItems: 'center',
        elevation: 3,
        shadowColor: cores.cardSombra,
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
        backgroundColor: cores.cardBorda,
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
        backgroundColor: cores.footer,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalFecharTexto: {
        color: cores.fundo,
        fontSize: 16,
    },
    usuarioContainer: {
        backgroundColor: cores.header,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    oláUsuario: {
        padding: 10,
        paddingTop: 20,
        marginLeft: 50,
        marginTop: 25,
        fontSize: 22,
        fontWeight: '400',
        color: cores.cardFundo,
        marginVertical: 16,
        textAlign: 'left',
        letterSpacing: 0.5,
        textShadowColor: cores.modal,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        position: 'absolute',
    },
    adicionadoRecentementeContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },

    adicionadoTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: cores.texto,
    },

    recomendadoTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: cores.texto,
        paddingHorizontal: 5,
        borderLeftWidth: 4,
        borderLeftColor: cores.texto,
        paddingLeft: 10,
    },


    bannerCard: {
        marginRight: 10,
        alignItems: 'center',
    },

    bannerImagem: {
        width: 300,
        height: 180,
        borderRadius: 10,
        resizeMode: 'cover',
    },

    bannerTitulo: {
        marginTop: 5,
        marginBottom: 5,
        color: cores.texto,
        textAlign: 'left',
        width: 300,
    }
})


