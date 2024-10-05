import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>LOGIN</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#000000"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#000000"
          />
          <TouchableOpacity 
            style={styles.eyeIconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon 
              name={showPassword ? 'eye' : 'eye-off'} 
              size={24} 
              color="#000" 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          When you agree to terms and conditions
        </Text>

        <Text style={styles.forgotPasswordText}>For got your password?</Text>

        <Text style={styles.orLoginText}>Or login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Image 
              style={styles.socialIcon}
              resizeMode='cover'
              source={require('./assets/facebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.zaloButton]}>
            <Image 
              style={styles.socialIcon}
              resizeMode='cover'
              source={require('./assets/zalo.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Image 
              style={styles.socialIcon}
              resizeMode='cover'
              source={require('./assets/google.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(49, 170, 82, 0.19)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 60,
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
    height: 54,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#000000',
    borderRadius: 0,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  loginButton: {
    backgroundColor: '#E53935',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  termsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
  },
  forgotPasswordText: {
    color: '#5D25FA',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  orLoginText: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    fontSize: 14,
    color: '#000000',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 4,
  },
  socialButton: {
    width: 110,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  socialIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  facebookButton: {
    backgroundColor: '#25479B',
    justifyContent: 'center',
  },
  zaloButton: {
    backgroundColor: '#0F8EE0',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0680F1',
  },
  facebookText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  zaloText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  googleText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default LoginScreen;