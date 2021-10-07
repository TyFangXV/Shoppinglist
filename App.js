import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid'
import Header from './components/header';
import ListItem from './components/listItem.js';
import AddItem from './components/addItem';

const App = () => {
  const [items, setItems] = useState([

  ]);

  //delete an item from the state
  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id != id);
    });
  };

  //add Item to the state
  const addItem = text => {
    console.log(text);
    if (text === ' ') {
      Alert.alert('Error', 'Enter an item',[{text : "ok"}], {cancelable :  true});
    } else {
      setItems(prev => {
        return [{id: uuid.v1(), text: text}, ...prev];
      });
    }
  };

  return (
    <View>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} DeleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default App;
