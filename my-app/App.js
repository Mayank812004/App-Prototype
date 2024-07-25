import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';

// Ensure paths are correct
const welcomeBackground = require('./assets/photo.jpg');
const loginBackground = require('./assets/photo.jpg');
const signupBackground = require('./assets/photo.jpg');
const dashboardBackground = require('./assets/photo.jpg');

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupPage, setIsSignupPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showGetStarted, setShowGetStarted] = useState(true);

  const handleLoginPress = () => {
    if (username.length > 0 && password.length > 0) {
      console.log("Login is working");
      setIsLoggedIn(true);
      setShowGetStarted(false);
    } else {
      Alert.alert('Error', 'Please enter username and password.');
    }
  };

  const handleSignupPress = () => {
    if (username.length > 0 && password.length > 0 && password === confirmPassword) {
      console.log("Signup is working");
      setIsLoggedIn(true);
      setShowGetStarted(false);
    } else {
      Alert.alert('Error', 'Please enter username, password, and confirm password correctly.');
    }
  };

  const handleLogoutPress = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setShowGetStarted(true);
  };

  const onTextChanged = (text, type) => {
    if (type === 'username') setUsername(text);
    if (type === 'password') setPassword(text);
    if (type === 'confirmPassword') setConfirmPassword(text);
  };

  const renderGetStartedPage = () => (
    <ImageBackground source={welcomeBackground} style={styles.background} resizeMode="cover">
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Welcome to Your App!</Text>
        <Text style={styles.getStartedText}>Get started by logging in or signing up.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => setShowGetStarted(false)} />
        </View>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      {showGetStarted && renderGetStartedPage()}

      {!isLoggedIn && !showGetStarted && (
        !isSignupPage ? (
          <ImageBackground source={loginBackground} style={styles.background} resizeMode="cover">
            <View style={styles.formContainer}>
              <Text style={styles.headerText}>Login Page</Text>
              <TextInput
                placeholder='Enter your Username'
                value={username}
                onChangeText={(text) => onTextChanged(text, 'username')}
                style={styles.input}
              />
              <TextInput
                placeholder='Enter your Password'
                value={password}
                onChangeText={(text) => onTextChanged(text, 'password')}
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button title='Login' color='blue' onPress={handleLoginPress} />
                <Button title='Go to Signup' color='green' onPress={() => setIsSignupPage(true)} />
              </View>
            </View>
          </ImageBackground>
        ) : (
          <ImageBackground source={signupBackground} style={styles.background} resizeMode="cover">
            <View style={styles.formContainer}>
              <Text style={styles.headerText}>Signup Page</Text>
              <TextInput
                placeholder='Enter your Username'
                value={username}
                onChangeText={(text) => onTextChanged(text, 'username')}
                style={styles.input}
              />
              <TextInput
                placeholder='Enter your Password'
                value={password}
                onChangeText={(text) => onTextChanged(text, 'password')}
                secureTextEntry={true}
                style={styles.input}
              />
              <TextInput
                placeholder='Confirm your Password'
                value={confirmPassword}
                onChangeText={(text) => onTextChanged(text, 'confirmPassword')}
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button title='Signup' color='blue' onPress={handleSignupPress} />
                <Button title='Go to Login' color='green' onPress={() => setIsSignupPage(false)} />
              </View>
            </View>
          </ImageBackground>
        )
      )}

      {isLoggedIn && !showGetStarted && (
        <ImageBackground source={dashboardBackground} style={styles.background} resizeMode="cover">
          <View style={styles.loggedInContainer}>
            <Text style={styles.loggedInText}>Welcome, {username}!</Text>
            <View style={styles.buttonContainer}>
              <Button title='Logout' color='red' onPress={handleLogoutPress} />
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  getStartedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Semi-transparent background
    borderRadius: 10, // Rounded corners
  },
  getStartedText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Semi-transparent background
    borderRadius: 10, // Rounded corners
  },
  headerText: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loggedInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Semi-transparent background
    borderRadius: 10, // Rounded corners
  },
  loggedInText: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
    color: '#fff',
  },
});
