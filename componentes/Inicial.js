import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Inicial extends React.Component{
    render(){
        return(
            <View >
                <Text>oida</Text>
                <Button style={styles.botao1}
                    title="Adicionar item"
                    color="blue"
                    onPress={() =>
                    this.props.navigation.navigate('AdicionaItens')    
                    }                
                />
                <Button style={styles.botao2}
                    title="Lista itens"
                    color="green"
                    onPress={() =>
                    this.props.navigation.navigate('ListaItens')    
                    }                
                />  
            </View>
        );
}};
const styles = StyleSheet.create({
    Button:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 18,
    },
});
