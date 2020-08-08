import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')


const Input = (props) => (

    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={{
            borderColor: 'gray',
            borderWidth: 0.5,
            width: width * 0.9,
            height: height * 0.07,
            borderRadius: 5,
            paddingLeft: 5,
            fontSize: 14,
            marginBottom:20
        }}></TextInput>
);

export default Input;
