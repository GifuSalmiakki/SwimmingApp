import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
  const [counter, setCounter] = useState(0);
  const addToCounter = () => setCounter(counter + 1);
  const removeFromCounter = () => setCounter(counter - 1);

  // Confetti animation when exercise-button is pressed
  /*const confettiRef = useRef<LottieView>(null);
  function triggerConfetti() {
    confettiRef.current?.play(0);
  }*/

  return (
  
    <View style={styles.container}>

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
        textColor="#064273"
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
    /*<LottieView
        ref={confettiRef}
        source={require('../../assets/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode='cover'
      />*/
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76b6c4",
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
    marginBottom: 50,
  },

  bigButtonContent: {
    height: 200,
    width: 200,
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

  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
  },
});