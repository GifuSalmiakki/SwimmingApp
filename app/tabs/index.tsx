import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedButton } from "react-native-3d-animated-buttons";
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
      <AnimatedButton
        title="Exercise done!"
        onPress={addToCounter}
      />

      <Button
        mode="outlined"
        textColor="#05365e"
        disabled={counter === 0}
        onPress={removeFromCounter}
        style={styles.smallButton}
      >
        Oops! Never mind
      </Button>

      <Text style={styles.text}>
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
    backgroundColor: "#a2e5f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  text: {
    color: "#364458",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "bold",

  },

  smallButton: {
    marginBottom: 30,
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