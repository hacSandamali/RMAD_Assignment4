/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TextInput
} from 'react-native';
import styles from './SignUp.styles';
import signupImage from '../assests/signup.jpg';
import googleLogo from '../assests/google-logo.png';
import facebookLogo from '../assests/facebook-logo.png';
import appleLogo from '../assests/apple-logo.png';

class SignUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Image style={styles.signupImage} source={signupImage}/>
        <Image style={styles.logoIcon} source={googleLogo}/>
        <Image style={styles.logoIcon} source={facebookLogo}/>
        <Image style={styles.logoIcon} source={appleLogo}/>
        <Text>or register with email........</Text>
        <TextInput style={styles.input} placeholder='@ Email ID'/>
        <TextInput style={styles.input} placeholder='@ Password'/>
        <TextInput style={styles.input} placeholder='@ Full Name'/>
        <TextInput style={styles.input} placeholder='@ Company Name'/>
      </SafeAreaView>
    );
  }
}

export default SignUp;