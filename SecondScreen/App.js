import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BusinessGrowthUI = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.circle} />
      <Text style={styles.title}>GROW{'\n'}YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>HOW WE WORK?</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circle: {
    width: 142,
    height: 142,
    borderRadius: 71,
    borderWidth: 15,
    borderColor: '#000000',
    marginBottom: 66,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 50,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 21,
  },
  button: {
    backgroundColor: '#E3C000',
    width: 125,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  footer: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
});

export default BusinessGrowthUI;