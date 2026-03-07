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

      <Text style={styles.text}>Price per month (€)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71b6c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    width: 200,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});