import React from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import {db} from '../config/config';

class AdicionaItens extends React.Component{
    State = {
        item: ''
    };

    SalvaItem = () =>{
        db.collection('/itens').add({
            item: this.state.item
        }).then(()=>{
            Alert.alert('Item salvo!');
        })

    };

    render(){
        return(
            <View style={styles.conteudoPrincipal}>
                <Text style={styles.titulo}>Seu nome:</Text>
                <TextInput style={styles.itemInput} onChangeText={item => {this.setState({item})}}/>
                <TouchableHighlight
                    style={styles.btn}
                    underlayColor="white"
                    onPress={this.SalvaItem}>
                    <Text style={styles.textoBtn}>Inscrever-se</Text>
                </TouchableHighlight>                
            </View>
        )
    }

}
export default AdicionaItens;

const styles = StyleSheet.create({
    conteudoPrincipal:{
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#4CD97B'
    },
    titulo:{
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput:{
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    textoBtn:{
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    btn: {
        height: 45,
        flexDirection:  'row',
        backgroundColor: 'white',
        borderColor: 'white',
        boderWidth: 1,
        borderRadius: 1,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent:   'center'
    }
});
