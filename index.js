/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Todo from './components/Todo'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todo);
