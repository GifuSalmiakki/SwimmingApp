import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedButton } from "react-native-3d-animated-buttons";
import ConfettiCannon from "react-native-confetti-cannon";
import { Button } from "react-native-paper";
import { useMembership } from "../dataTracker";
import SetupScreen from "../setupScreen";

export default function HomeScreen() {
  const { price, period, setMembership } = useMembership();

  const [counter, setCounter] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  if (price === null) {
    return (
      <SetupScreen
        onStart={(p, per) => setMembership(p, per)}
      />
    );
  }

  function addExercise() {
    setCounter(counter + 1);
    setShowConfetti(true);
  }

  const removeFromCounter = () => {
    setCounter(counter - 1);
  };

  function calculateSessionPrice() {
    if (counter != 0 && price != null) return (price / counter).toFixed(2);
    else if (price != null) return price.toFixed(2);
    else return 0.00 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Price per session: </Text>
      <Text style={styles.price}> {calculateSessionPrice()} €</Text>

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
          explosionSpeed={350}
          fallSpeed={2500}
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
    marginBottom: 20,
    fontWeight: "bold",
  },

  price: {
    color: "#364458",
    fontSize: 56,
    fontWeight: "bold",
    marginBottom: 75,
  },

  smallButton: {
    marginBottom: 30,
  },
});