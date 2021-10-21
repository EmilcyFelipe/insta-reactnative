import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function List(props){
    return(
        <View style={styles.list}>
            <View style={styles.viewPerfil}>
                <Image 
                source={{uri: props.data.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>

            </View>
            <Image/>
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        padding: 10
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomeUsuario:{
        paddingLeft:5,
        fontSize: 22,
        color: '#000'
    }
})