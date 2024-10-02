import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

const XMLEye = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.eyeContainer}>
        <Image
          source={require('./assets/images/eyeball.png')}
          style={styles.eyeImage}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('./assets/images/user-icon.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
            placeholderTextColor="#C4C4C4"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={require('./assets/images/lock-icon.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            placeholderTextColor="#C4C4C4"
            secureTextEntry
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.otherLoginContainer}>
        <View style={styles.line} />
        <Text style={styles.otherLoginText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3AB4FF' }]}>
          <Image
            source={require('./assets/images/addUser-icon.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#F4AA47' }]}>
          <Image
            source={require('./assets/images/wifi-icon.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3A579C' }]}>
          <FontAwesome name="facebook" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  eyeContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  eyeImage: {
    width: 112,
    height: 107,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    marginBottom: 20,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#386FFC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  optionText: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  otherLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#0E18F5',
  },
  otherLoginText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    width: 74,
    height: 74,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 60,
    height: 60,
  },
});

export default XMLEye;