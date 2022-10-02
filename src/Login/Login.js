/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
    Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Login.styles';
import loginImage from '../assests/login.jpg';
import googleLogo from '../assests/google-logo.png';
import facebookLogo from '../assests/facebook-logo.png';
import appleLogo from '../assests/apple-logo.png';
import lock from '../assests/lock.png';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.loginImage} source={loginImage}/>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder='@ Email ID'/>
        <TextInput style={styles.input} placeholder='@ Password'>
          <Image style={styles.logoIcon} source={lock}/>
        </TextInput>
        <TouchableOpacity>
            <Text style={styles.txtforgot}>Forgot?   </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>Or, login with... </Text>
        <Image style={styles.logoIcon} source={googleLogo}/>
        <Image style={styles.logoIcon} source={facebookLogo}/>
        <Image style={styles.logoIcon} source={appleLogo}/>
        <Text style={styles.newTo}>New to iThickLogistics? </Text>
        <Text style={styles.txtforgot}>Register</Text>
      </SafeAreaView>
    );
  }
}

export default Login;