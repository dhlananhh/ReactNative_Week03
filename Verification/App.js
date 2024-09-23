import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CodeVerificationScreen = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleCodeChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        if (text && index < 5) {
            this[`input${index + 1}`].focus();
        }
    };

    return (
        <LinearGradient
            colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.container}
        >
            <Text style={styles.title}>CODE</Text>
            <Text style={styles.subtitle}>VERIFICATION</Text>
            <Text style={styles.description}>
                Enter ontime password sent on{'\n'}++849092605798
            </Text>
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.codeInput}
                        value={digit}
                        onChangeText={(text) => handleCodeChange(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(input) => { this[`input${index}`] = input; }}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>VERIFY CODE</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000000',
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#E3C000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CodeVerificationScreen;