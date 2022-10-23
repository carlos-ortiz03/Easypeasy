import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 15,
        paddingTop: 75,
        backgroundColor: '#2D5D7B'
    },
    text: {
        color: "#fff",
        fontSize: 32,
        textAlign: 'center'
    }
});