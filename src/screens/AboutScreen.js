import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

function AboutScreen({navigation}) {
    const onPressHandler = () => {
        // navigation.navigate('Home Screen');
        navigation.goBack();
      }
    
      return (
        <View style={styles.body}>
          <Text style={styles.text}>
            About Page
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
          >
            <Text style={styles.text}>
              Go Back
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

  export default AboutScreen;