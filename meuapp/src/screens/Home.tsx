import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Lampada from '../components/Lampada'


export default function Home() {
    return(
        <View style={homestyle.container}>
            <StatusBar style="light" />
            <Header/>
            {/* Meu Primeiro Comentario */}
            <Lampada/>
            <Text style={homestyle.text}>Hello World Home</Text>
        </View>
        
    )}

    const homestyle = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        text: {
          backgroundColor:'#000',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }

      });