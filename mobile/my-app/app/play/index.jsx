import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Sonarize = () => {
  return (
    
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../img/playlist/BRABA.png')} style={styles.imageBackground}>
      </ImageBackground>
      
      <View style={styles.spacing} /> 

      <FlatList
        data={TopPlaylists}
        renderItem={PlaylistCard}
        contentContainerStyle={styles.playlistContainer}
        horizontal={false}
      />
    </ScrollView>
  );
};

const PlaylistCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.imagem} style={styles.playlistImage} />
    <View style={styles.textContainer}>
      <Text style={styles.playlistTitle}>{item.nome}</Text>
      <Text style={styles.playlistDescription}>{item.artista}</Text>
    </View>
    <TouchableOpacity style={styles.playButton}>
      <Text style={styles.playButtonText}>▶</Text>
    </TouchableOpacity>
  </View>
);

const TopPlaylists = [
  { id: '1', nome: 'Braba', artista: 'Tuto, Joazinho da vt ...', imagem: require('../img/playlist/BRABA.png') },
  { id: '2', nome: 'Parada Rap', artista: 'Racionais mcs, Dexter...', imagem: require('../img/playlist/ParadaRap.png') },
  { id: '3', nome: 'Poesia Acústica', artista: 'Xamã, Mc Poze, ...', imagem: require('../img/playlist/PoesiaAcustica.png') },
  { id: '4', nome: 'Top Sertanejo', artista: 'Marilia, Jorge e Mateus ...', imagem: require('../img/playlist/TopSertanejo.png') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d4', // Dark background color
  },
  imageBackground: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  spacing: {
    height: 20,
  },
  playlistContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6141ac',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  playlistImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  playlistDescription: {
    fontSize: 12,
    color: '#b8b8b4',
  },
  playButton: {
    backgroundColor: '#1db954', 
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Sonarize;