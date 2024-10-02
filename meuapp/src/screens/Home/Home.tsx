import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import Lampada from '../../components/Lampada/Lampada';
import Footer from '../../components/Footer/Footer';
import {HomeStyle} from './HomeStyle';

export default function Home() {
    return(
        <View style={HomeStyle.container}>
            <StatusBar style="light" />
            <Header/>
            {/* Meu Primeiro Comentario */}
            <Lampada/>
            <Text style={HomeStyle.text}>Hello World Home</Text>
            <Footer/>
        </View>
        
    )}

   