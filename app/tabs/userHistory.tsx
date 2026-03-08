import { StyleSheet, Text, View } from 'react-native'

export default function UserHistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Here you can see your history!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2e5f0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#364458'
  }
})
