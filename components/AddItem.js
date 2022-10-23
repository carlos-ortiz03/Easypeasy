import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

const AddItem = (props) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
        <View style={styles.AddItem}>
            <TextInput placeholder="Add to-do item..." style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.button} onPress={() => props.addItem(text)}>
                <Text style={styles.buttonText}>
                {/* <FontAwesomeIcon icon={faPlus} size={20} color="#686868"/> */}
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddItem;

const styles = StyleSheet.create({
    AddItem: {
        margin: 5,
        borderWidth: 2,
        borderColor: '#686868'
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: '#457EAC',
        padding: 9,
        // margin: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});