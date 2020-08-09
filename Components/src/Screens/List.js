import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native';
import { connect, useDispatch } from 'react-redux'
import {getList} from '../actions'

import Input from '../../Input'
import Button from '../../Button'


const List=(props)=> {


    const [data, setData] = useState([])


    useEffect(() => {
      props.getList();
    }, [])

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
                    data={props.list}
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

const mapStateToProps=(state)=>{
    const {list}=state.listResponse;
    return {list};
}

export default connect(mapStateToProps,{getList})(List);