import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native';

import Input from '../../Input'
import Button from '../../Button'


export default function List(props) {


    const [data, setData] = useState([])


    useEffect(() => {
        if (props.route.params?.obj) {
            let arr = data.slice()
            arr.push(props.route.params?.obj)
            setData(arr)
        }
    }, [props.route.params?.obj])

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <FlatList style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 24, color: 'gray' }}>Your To - Do List</Text>
                            </View>
                        )
                    }}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
