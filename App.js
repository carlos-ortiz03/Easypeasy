import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header.js';
import 'react-native-get-random-values';
import ToDoItem from './components/ToDoItem.js';
import { nanoid } from 'nanoid';
import AddItem from './components/AddItem.js';
import ImagePicker from './components/ImagePicker.js';

export default function App() {

  const [items, setItem] = useState([

    // {id: nanoid(), text: "Math"},
    // {id: nanoid(), text: "Science"},
    // {id: nanoid(), text: "Physics"},
    // {id: nanoid(), text: "English"}
  ])

  const addItem = (item) => {
    setItem(prevItems => {
      return [{id: nanoid(), text: item}, ...prevItems]
    })
  }

  const deleteItem = (id) => {
    setItem(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }
  
  return (
    <View style={styles.container}>
      <Header title='Today'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => (
      <ToDoItem item={item} deleteItem={deleteItem}/> 
      )} />
      <ImagePicker title='Pick Image'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 60
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
