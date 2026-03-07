import Button from "@mui/material/Button";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Mjäy oon toi kissa!</Text>
      <Button variant="contained">Contained</Button>
      <Link href="/userHistory" style={styles.button}> Activity </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71b6c2",
    alignItems: "center",
    justifyContent: "center"
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