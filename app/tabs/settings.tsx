import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SettingsScreen() {

  const [price, setPrice] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit the membership price</Text>

      <TextInput
        style={styles.input}
        placeholder="50"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.text}>Price per year (€)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2e5f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#364458',
    marginBottom: 50,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: '#ffffff',
    width: 200,
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
    fontSize: 18,
  },
});