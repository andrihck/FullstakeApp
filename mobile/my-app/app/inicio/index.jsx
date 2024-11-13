import React from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const sonarize = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>

      <Link href='/playlist'>
        <Image style={styles.icon} source={require('../img/logo.png')} /></Link>
        
        <Pressable style={styles.navBotaoMusica}>
          <Text style={styles.navTextoBotaoMusica}>Música</Text>
        </Pressable>


        <Pressable style={styles.navBotaoPodcast}>
          <Text style={styles.navTextoBotaoPodcast}>Podcast</Text>
        </Pressable>


        <Link href='/perfil'>
           <View style={styles.fotoperfil}></View >
        </Link>
      


      </View>
      <ScrollView>
        <ImageBackground source={require('../img/FundoPH.png')} style={styles.ImagemFundo} />
        <View style={styles.artistas}>
          <Text style={styles.artistaTitulo}>Melhores artistas</Text>
          <View style={styles.boxartista}>
            <View style={styles.circulo}>
              <Image style={styles.imgArtista} source={require('../img/artistas/filipeRet.png')} />
            </View>
            <View style={styles.circulo}>
              <Image style={styles.imgArtista} source={require('../img/artistas/joaoGomes.png')} />
            </View>
            <View style={styles.circulo}>
              <Image style={styles.imgArtista} source={require('../img/artistas/luisaSonza.png')} />
            </View>
          </View>
        </View>
       
        <Text style={styles.TituloParaVoce}>Para Você</Text>
        <FlatList
          data={TopPlaylists}
          renderItem={CaixaLista}
          horizontal
          contentContainerStyle={styles.playlistContainerPlaylist}
        />

        <Text style={styles.TituloParaVoce}>Top Podcast Latinos</Text>

        <FlatList 
          data={Podcasts}
          renderItem={CaixaPodCast}
          horizontal
          contentContainerStyle={styles.ContainerPodCast}>
        </FlatList>
      </ScrollView>
    </View>
  );
};

const CaixaLista = ({ item }) => (
  <View style={styles.itemParaVoce}>
    <Link href='/Playlists'>
      <View style={styles.CardParaVoce}>
        <Image source={item.imagem} style={styles.imagemParaVoce} />
        <Text style={styles.NomeParaVoce}>{item.nome}</Text>
        <Text style={styles.descricaoParaVoce}>{item.artista}</Text>
      </View>
    </Link>
  </View>
);

const TopPlaylists = [
  { id: '1', nome: 'Braba', artista: 'Tuto, Joazinho da vt ...', imagem: require('../img/playlist/BRABA.png') },
  { id: '2', nome: 'Parada Rap', artista: 'Racionais mcs, Dexter...', imagem: require('../img/playlist/ParadaRap.png') },
  { id: '3', nome: 'Poesia Acústica', artista: 'Xamã, Mc Poze, ...', imagem: require('../img/playlist/PoesiaAcustica.png') },
  { id: '4', nome: 'Top Sertanejo', artista: 'Marilia, Jorge e Mateus ...', imagem: require('../img/playlist/TopSertanejo.png') },
];

const CaixaPodCast = ({ item }) => (
  <View style={styles.itemPodCast}>
    <Link href={{ pathname: `/app/detalhe/${item.id}`, params: { 'TopPlaylists': JSON.stringify(item) } }} asChild>
      <View style={styles.CardPodCast}>
        <Image source={item.imagem} style={styles.imagemParaVoce} />
        <Text style={styles.NomeParaVoce}>{item.nome}</Text>
        <Text style={styles.descricaoParaVoce}>{item.artista}</Text>
      </View>
    </Link>
  </View>
);


const Podcasts = [
  { id: '1', nome: 'Lutz',imagem: require('../img/podcast/LutzPodCast.png') },
  { id: '2', nome: 'Pod Delas',imagem: require('../img/podcast/PodDelas.png') },
  { id: '3', nome: 'Pod Pah',imagem: require('../img/podcast/PodPah.png') },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d4',
  },
  ImagemFundo: {
    width: '100%',
    height: 400,
    
  },
  navbar: {
    flexDirection: 'row',
    gap: 25, //espaçamento entre elementos
    padding: 19,
    position: 'absolute',
    zIndex: 10,  //paradinha para sobrepor img
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#6c4cd8',
    borderRadius: 10,
  },
  navBotaoMusica: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#6c4cd8',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  navBotaoPodcast: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#6c4cd8',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  navTextoBotaoMusica: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navTextoBotaoPodcast: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fotoperfil: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  artistas: {
    alignSelf: 'center',
    width: '95%',
    backgroundColor: '#e4e2dd',
    marginBottom: 50,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  artistaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a4a4a',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 3, height: 2 },
  },
  boxartista: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  circulo: {
    width: 110,
    height: 110,
    borderRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgArtista: {
    width: '100%',
    height: '100%',
  },
  TituloParaVoce: {
    padding: 3,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'left',
    color: '#4a4a4a',
    textShadowColor: 'rgba(5, 10, 11, 0.2)',
    textShadowOffset: { width: 3, height: 2 },
  },
  playlistContainerPlaylist: {
    paddingVertical: 30,
    
  },
  itemParaVoce: {
    backgroundColor: '#e4e2dd',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 170,
    height: 200,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  imagemParaVoce: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  NomeParaVoce: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
    color: '#4a4a4a',
  },
  descricaoParaVoce: {
    fontSize: 12,
    color: '#b8b8b4',
    textAlign: 'left',
  },
  ContainerPodCast: {
    paddingVertical: 30,
  },
  itemPodCast: {
    backgroundColor: '#e4e2dd',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 170,
    height: 188,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    
  },
  CardPodCast: {
    
  },
});

export default sonarize;