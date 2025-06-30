import { Text, Image, TouchableOpacity, View, Modal, FlatList } from 'react-native'
import { styles } from './style'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute, RouteProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

interface filmeData {
    id: number,
    titulo: string,
    sinopse: string,
    genero: string,
    diretor: string,
    ano: number,
    elenco: {
        nome: string,
        nacionalidade: string,
        dataNascimento: string
    }[]
}

interface usuarioData {
    id: number
    nome: string
}

type RootStackParamList = {
    Filmes: { userId?: string }
}

export default function Filmes() {
    const route = useRoute<RouteProp<RootStackParamList, 'Filmes'>>();
    const [filmes, setFilmes] = useState<filmeData[]>([])
    const [modalVisible, setModalVisible] = useState(false)
    const [filmeSelecionado, setFilmeSelecionado] = useState<filmeData | null>(null)
    const [nomeUsuario, setNomeUsuario] = useState("")


    useEffect(() => {
        const buscar = async () => {
            try {
                const response = await api.get('/filmes')
                setFilmes(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        buscar()
    }, [])

    useEffect(() => {
        async function buscarUsuario() {
            try {
                const userId = route.params?.userId ?? (await AsyncStorage.getItem('userId'))
                if (!userId) return;

                const response = await api.get<usuarioData>(`/usuarios/${userId}`);
                setNomeUsuario(response.data.nome);
            } catch (error) {
                console.error('Erro ao buscar nome do usuário:', error);
            }
        }
        buscarUsuario()
    }, [route.params?.userId])

    const abrirModal = (filme: filmeData) => {
        setFilmeSelecionado(filme)
        setModalVisible(true)
    }

    return (
        <View style={{ flex: 1 }}>
            {nomeUsuario && (
                <View style={styles.usuarioContainer}>
                    <Feather name="user" size={20} color="#333" style={{ marginRight: 8 }} />
                    <Text style={styles.oláUsuario}>Olá, {nomeUsuario}</Text>
                </View>
            )}


            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => abrirModal(item)}>
                        <Image
                            source={{ uri: `http://192.168.100.179:8080/filmes/${item.id}/foto` }}
                            style={styles.capa}
                        />
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.info}>{item.ano}</Text>
                        <Text style={styles.info}>{item.genero}</Text>
                    </TouchableOpacity>
                )}
            />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitulo}>{filmeSelecionado?.titulo}</Text>
                        <Text style={styles.modalTexto}>🎬 Diretor: {filmeSelecionado?.diretor}</Text>
                        <Text style={styles.modalTexto}>📖 Sinopse: {filmeSelecionado?.sinopse}</Text>
                        <Text style={styles.modalTexto}>👥 Elenco:</Text>
                        {filmeSelecionado?.elenco.map((ator, index) => (
                            <Text key={index} style={styles.modalTexto}>
                                - {ator.nome} ({ator.nacionalidade}, {ator.dataNascimento})
                            </Text>
                        ))}
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalFechar}>
                            <Text style={styles.modalFecharTexto}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
