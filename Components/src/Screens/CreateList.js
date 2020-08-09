import React, { useState } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import Input from '../../Input'
import Button from '../../Button'

import { connect, useDispatch } from 'react-redux';

import {  LOADING_START, LOADING_END } from '../actions/types'

import {updateList} from '../actions'




const CreateList = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <View style={styles.inputView}>
                <Input placeholder={'Title'}
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />
                <Input placeholder={'Description'}
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                />
                <Button text={'Add'} onPress={() => {
                    // dispatch({ type: LOADING_START })
                    let obj = {
                        title: title,
                        description: description
                    }
                    props.updateList(obj);
                    // dispatch({ type: UPDATE_LIST, payload: obj })
                    // setTimeout(function(){
                    //     dispatch({ type: LOADING_END })}, 5000)

                    props.navigation.navigate('List');
                }} />
                {props.loader && <ActivityIndicator />}
            </View>
        </KeyboardAvoidingView>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: 'white'
    },
    list: {
        flex: 1
    },
    description: {
        fontSize: 18,
        color: 'white'
    },
    inputView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};

export default connect(mapStateToProps, {updateList})(CreateList);
