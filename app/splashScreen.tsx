import { StyleSheet, Text, View } from 'react-native'

export default function StartingScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71b6c2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
})
