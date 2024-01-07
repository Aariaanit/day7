import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

function HomeScreen({navigation}) {
    
  const onPressHandler = () => {
    navigation.navigate('About Screen');
  }
      return (
        <View style={styles.body}>
          <Text style={styles.text}>
            Home Page
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
          >
            <Text style={styles.text}>
              Go to About Page
            </Text>
          </Pressable>
        </View>
      )
}


const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  }) 
export default HomeScreen;