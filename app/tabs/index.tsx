import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function App() {

  const [counter, setCounter] = useState(0);
  const addToCounter = () => setCounter(counter + 1);
  const removeFromCounter = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mjäy oon tää kissa!</Text>

      <Button
        mode="contained"
        buttonColor="#04527c"
        onPress={addToCounter}
        style={styles.bigButton}
        contentStyle={styles.bigButtonContent}
        labelStyle={styles.bigButtonLabel}
      >
        Exercise done!
      </Button>

      <Button
        mode="outlined"
        textColor="#054364"
        disabled={counter === 0}
        onPress={removeFromCounter}
        style={styles.smallButton}
      >
        Oops! Never mind
      </Button>

      <Text style={styles.counterText}>
        Sessions completed: {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71b6c2",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,              
  },

  text: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 30,
  },

  bigButton: {
    borderRadius: 100,         
    marginBottom: 20,
  },

  bigButtonContent: {
    height: 200,           
    width: 220,
  },

  bigButtonLabel: {
    fontSize: 20,
  },

  smallButton: {
    marginBottom: 30,
  },

  counterText: {
    fontSize: 18,
  },
});