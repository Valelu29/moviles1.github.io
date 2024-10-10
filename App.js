import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image, TextInput } from 'react-native';

const App = () => {
  const [text1, setText1] = useState(''); 
  const [text2, setText2] = useState(''); 
  const [count, setCount]=useState(0);
  const onPress =() => setCount(prevCount => prevCount + 1);

  const handleButtonPress = () => {
    Alert.alert('Hello', `Texto 1: ${text1}\nTexto 2: ${text2}`); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo</Text>
      
      <Image 
        source={{ uri: 'https://picsum.photos/id/19/200/300' }} 
        style={styles.image} 
      />

      <TextInput
        style={styles.input}placeholder="Texto 1"value={text1}onChangeText={setText1}
      />
      <TextInput
        style={styles.input}placeholder="Texto 2"value={text2}onChangeText={setText2}
      />
      <View style={styles.container}>
      <Text>Count: {count} </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress} 
      >
        <Text style={styles.buttonText}>Presioname</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}, 

  title: {fontSize: 30},

  image: {height: 200, width: 200, borderRadius: 90},

  button: {backgroundColor: "purple", padding: 7, marginTop: 10},

  buttonText: {color: '#fff', fontSize: 20},

  input: {height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, width: '20%'}

});

export default App;
