import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';


export default function Home() {
    return(
        <View style={homestyle.container}>
            <Header/>
            {/* Meu Primeiro Comentario */}
            <Text style={homestyle.text}>Hello World Home</Text>
            <StatusBar style="light" />
        </View>
        
    )}

    const homestyle = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          backgroundColor:'#000',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }

      });