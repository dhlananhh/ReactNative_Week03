import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = () => {
  const [gender, setGender] = useState('male');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.input} placeholder="Birthday" />
      
      <View style={styles.genderContainer}>
        <TouchableOpacity 
          style={[styles.radioButton, gender === 'male' && styles.radioButtonSelected]} 
          onPress={() => setGender('male')}
        >
          <View style={styles.radioCircle}>
            {gender === 'male' && <View style={styles.radioCircleSelected} />}
          </View>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.radioButton, gender === 'female' && styles.radioButtonSelected]} 
          onPress={() => setGender('female')}
        >
          <View style={styles.radioCircle}>
            {gender === 'female' && <View style={styles.radioCircleSelected} />}
          </View>
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>
      
      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2e9',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3d2f',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#c2e3d4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#c2e3d4',
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
  },
  eyeIcon: {
    justifyContent: 'center',
    padding: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioCircleSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  registerButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
});

export default RegisterScreen;