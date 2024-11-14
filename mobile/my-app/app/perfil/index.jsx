import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';

export default function UserProfile() {
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Perfil</Text>
        
        <Pressable onPress={pickImage}>
          <Image 
            source={image ? { uri: image } : require('../img/usuario.png')}
            style={styles.imagem} 
          />
        </Pressable>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTexto}>Nome:</Text>
          <Text style={styles.infoInput}>Andrielli dos Santos Hencker</Text>
          <Text style={styles.infoTexto}>Email:</Text>
          <Text style={styles.infoInput}>arthurjosefraga@gmail.com</Text>
          <Text style={styles.infoTexto}>Data de nasc.</Text>
          <Text style={styles.infoInput}>19/03/2007</Text>
        </View>

        <Pressable style={styles.botaoSalvar}>
          <Text style={styles.botaoSalvarTexto}>Salvar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#e4e2dd',
    padding: 25,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
},
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },  
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    backgroundColor: '#dcdcdc',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoTexto: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  infoInput: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  botaoSalvar: {
    backgroundColor: '#6141ac',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  botaoSalvarTexto: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
});