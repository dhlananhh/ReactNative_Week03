import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPasswordScreen = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      style={styles.container}
    >
      <Image
        source={require('./assets/lock-icon.png')}
        style={styles.lockIcon}
      />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/mail-icon.png')}
          style={styles.mailIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000000"
        />
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  lockIcon: {
    width: 105,
    height: 117,
    marginBottom: 37,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 32,
  },
  description: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: 45,
    marginBottom: 43,
  },
  mailIcon: {
    width: 48,
    height: 45,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#000000',
  },
  nextButton: {
    backgroundColor: '#E3C000',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
});

export default ForgotPasswordScreen;