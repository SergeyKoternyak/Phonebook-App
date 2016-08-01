import angular from 'angular';
import base64Upload from 'angular-base64-upload';
import datepicker from 'angularjs-datepicker';
import MainController from './mainController.js';
import ContactController from './contactController.js';
import '../styles/reset.css';
import '../node_modules/angularjs-datepicker/src/css/angular-datepicker.css';
import '../styles/main.less';


angular.module('phonebookApp', ['naif.base64','720kb.datepicker'])
	.controller('MainController', MainController)
	.controller('ContactController', ContactController);