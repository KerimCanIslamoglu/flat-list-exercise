import React, { useState } from 'react';
import { Text, View, StyleSheet,KeyboardAvoidingView } from 'react-native';

import Input from '../../Input'
import Button from '../../Button'




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
                    let obj = {
                        title: title,
                        description: description
                    }
                  props.navigation.navigate('List',{obj});
                }} />
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
export default CreateList;
