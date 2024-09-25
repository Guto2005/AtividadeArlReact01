import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {useState} from 'react';
import lampadaOff from '../../assets/lampadaOff.png';
import lampadaOn from '../../assets/lampadaOn.png'

export default function Lampada(){
    // área de código / lógica do componente
    const [apagada, setApagada] = useState(true);

    function TurnOnOff(){
        setApagada(!apagada);
    }


    return (
        <View style={lampadaStyle.container}>
            <TouchableOpacity onPress={TurnOnOff}>
            <Image source={apagada?lampadaOff:lampadaOn} style={lampadaStyle.image}/>
            </TouchableOpacity>
            <Text style={lampadaStyle.text}>
                Clique na lâmpada para acendê-la ou apagá-la
            </Text>
        </View>
    )
}

const lampadaStyle = StyleSheet.create({
    container:{
        gap:16,
        alignItems:'center'
    },
    image:{
        width:200,
        height:200
    },
    text:{
        color:'#777',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
});