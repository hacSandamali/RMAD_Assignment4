/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/Login/Login';
import SignUp from './src/SignUp/SignUp';

AppRegistry.registerComponent(appName, () => SignUp);
