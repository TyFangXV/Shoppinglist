import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Header = (props) => {
   return(
      <View style={styles.header}>
        <Text style={styles.text}>Shopping list</Text>
      </View>
   )
}


const styles = StyleSheet.create({
  header : {
      height: 60,
      padding: 5,
      backgroundColor: 'darkslateblue'
  },

  text : {
      color: "white",
      fontSize: 30,
      textAlign: "center"
  }
})

export default Header;