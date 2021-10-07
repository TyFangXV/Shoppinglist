import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, DeleteItem}) => {
   return(
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name="remove" size={20} color="firebrick" onPress={()=> DeleteItem(item.id)}/>
        </View>
      </TouchableOpacity>
   )
}


const styles = StyleSheet.create({
   listItem : {
       padding: 15,
       borderBottomWidth: 1,
       borderColor : "eee",
       backgroundColor: "f8f8f8"
   },

   listItemView : {
       flexDirection : "row",
       justifyContent: "space-between",
       alignItems : "center"
   },

   listItemText : {
       fontSize : 15,

   }
})

export default ListItem;