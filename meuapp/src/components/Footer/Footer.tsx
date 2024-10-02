import React from 'react';
import { View, Text } from 'react-native';

import { FooterStyle } from './FooterStyle';

export default function Footer() {
  return (
    <View style={FooterStyle.container}>
        <Text style={FooterStyle.text}>XPTO SOFTWARES</Text>
    </View>
  );
}