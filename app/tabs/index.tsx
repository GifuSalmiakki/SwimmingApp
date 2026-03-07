import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";


export default function App() {

  const [counter, setCounter] = useState(0);
  const addToCounter = () => setCounter(counter+1);
  const removeFromCounter = () => setCounter(counter-1);

  return (

    <View style={styles.container}>
      <Text style = {styles.text}>Mjäy oon tää kissa!</Text>

      <Button buttonColor="#04527c" mode="contained"
          onPress={addToCounter}
          >Exercise done!
        </Button>

      <Button textColor="#054364" mode="outlined"
        disabled={counter === 0}
        onPress={removeFromCounter} 
        >Oops! Never mind
      </Button>

      <Text>Sessions completed: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71b6c2",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
})