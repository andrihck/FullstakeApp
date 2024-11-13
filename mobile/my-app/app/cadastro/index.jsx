import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";
import {Link} from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6d6d4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    box: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        padding: 70,
        elevation: 5,
        backgroundColor: '#e4e2dd',
        borderRadius: 15,
    },
    input: {
        height: 50,
        width: '140%',
        borderColor: '#171716',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        backgroundColor: '#d6d6d4',
    },
     inputView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#6141ac',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 15,
    },
    botaotexto: {
        color: '#e4e2dd',
        fontSize: 16,
        fontWeight: '600',
    },
    titulo: {
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4a4a4a', 
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 3, height: 2 }, 
    },
   
    
});

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const registrarUsuario = async () => {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos');
            return;
        }

        const resposta = await fetch('http://localhost:8000/registro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: nome,
                email: email,
                senha: senha,
                sobrenome: sobrenome,
                dataNascimento: dataNascimento,
            }),
        });

        if (!resposta) {
            console.log('erro');
        } else if (resposta.status === 200) {
            console.log('user criado com sucesso');
        } else {
            console.log('ocorreu um erro');
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={style.box}>
                <Text style={style.titulo}>Registre-se</Text>
                <View style={style.inputView}>
                    <TextInput
                        style={style.input}
                        onChangeText={setNome}
                        value={nome}
                        placeholder="Nome:"
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={setSobrenome}
                        value={sobrenome}
                        placeholder="Sobrenome:"
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email:"
                    />
                     <TextInput
                        style={style.input}
                        onChangeText={setSenha}
                        value={senha}
                        placeholder="Senha:"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={setDataNascimento}
                        value={dataNascimento}
                        placeholder="Data de nascimento:"
                    />
                   
                    <Pressable style={style.botao} onPress={registrarUsuario}>
                        <Text style={style.botaotexto}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}