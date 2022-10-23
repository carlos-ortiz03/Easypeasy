import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
const ToDoItem = (props) => {
    return (
        <TouchableOpacity style={[styles.toDoItem]}>
            <View style={styles.toDoItemView}>
                <Text style={styles.text}>{props.item.text}</Text>
                <Pressable onPress={() => props.deleteItem(props.item.id)}>
                    <FontAwesomeIcon icon={faTrash} size={20} color="#686868"/>
                </Pressable>
            </View>
        </TouchableOpacity>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    toDoItem: {
        padding: 15,
        backgroundColor: '#9191E9',
        borderTopWidth: 1,
        borderColor: '#686868'
    },
    text: {
        color: "",
        fontSize: 24,
        // textAlign: 'center'
    },
    toDoItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    odd: {
        backgroundColor: '#9191E9'
    }
});