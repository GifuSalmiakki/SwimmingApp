import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { useMembership } from "./dataTracker";

export default function SetupScreen() {
  const { setMembership } = useMembership();

  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("month");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your membership price</Text>

      <TextInput
        placeholder="Membership price (€)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />

      <View style={styles.buttons}>
        <Button
          mode={period === "week" ? "contained" : "outlined"}
          onPress={() => setPeriod("week")}
        >
          Per week
        </Button>

        <Button
          mode={period === "month" ? "contained" : "outlined"}
          onPress={() => setPeriod("month")}
        >
          Per month
        </Button>

        <Button
          mode={period === "year" ? "contained" : "outlined"}
          onPress={() => setPeriod("year")}
        >
          Per year
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={() => setMembership(Number(price), period)}
        style={styles.startButton}
      >
        Start Tracking
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  startButton: {
    marginTop: 20,
  },
});