import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedButton } from "react-native-3d-animated-buttons";
import ConfettiCannon from "react-native-confetti-cannon";
import { Button } from "react-native-paper";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  function addExercise() {
    setCounter((prev) => prev + 1);
    setShowConfetti(true);
  }

  const removeFromCounter = () => setCounter((prev) => prev - 1);

  return (
    <View style={styles.container}>
      
      <AnimatedButton
        title="Exercise done!"
        onPress={addExercise}
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

      {showConfetti && (
        <ConfettiCannon
          count={120}
          origin={{ x: 200, y: -10 }}
          fadeOut
          explosionSpeed={300}
          fallSpeed={2000}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}

    </View>
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
});