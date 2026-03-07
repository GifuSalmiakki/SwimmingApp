import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

let counter = 0;
export default function App() {

  const [counter, setCounter] = useState(0);
  const addToCounter = () => setCounter(counter+1);
  const removeFromCounter = () => setCounter(counter-1);

  return (

    <View style={styles.container}>
      <Text style = {styles.text}>Mjäy oon tää kissa!</Text>
      <Link href="/userHistory" style={styles.button}> Activity </Link>

      <Button buttonColor="#04527c" onPress={addToCounter}
            mode="contained">Exercise done!</Button>

      <Button textColor="#054364" onPress={removeFromCounter} mode="outlined">Oops! Never mind (-1)</Button>

      <Text>Sessions completed: {+counter}</Text>
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