import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Button = (props) => (
    <TouchableOpacity style={{
        backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: width * 0.9,
        height: height * 0.07, borderRadius: 5, borderWidth:1
    }}
    onPress={props.onPress}>
        <Text style={{color:'white'}}>{props.text}</Text>
    </TouchableOpacity>
);

export default Button;
