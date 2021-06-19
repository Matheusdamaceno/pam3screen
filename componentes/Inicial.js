import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Inicial extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Inscrição para o campeonato</Text>
                <Text style={styles.texto}>A escola esta fazendo um campeonato de futebol, onde o time vencedor ganhará muitos premios. Quer participar? Clique em cadastrar!</Text>
                <Button style={styles.botao}
                    title="Cadastrar-se"
                    color="#4CD97B"
                    onPress={() =>
                    this.props.navigation.navigate('AdicionaItens')    
                    }                
                />
                <Button
                    title="Cadastrados"
                    color="#60F066"
                    onPress={() =>
                    this.props.navigation.navigate('ListaItens')    
                    }                
                />  
                <Text style={styles.eu}>Desenvolvido: Matheus Damaceno</Text>
            </View>
        );
}};
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 16,
    },
    texto:{
        fontSize: '15px',
        marginBottom: '30px'
    },
    titulo:{
        fontSize: '18px',
        marginVertical: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    botao:{
        marginHorizontal: 18,
    },
    eu:{
        marginHorizontal: 5,
        marginTop: 170,
    },
});
