import MainController from './mainController.js';
import ContactController from './contactController.js';

angular.module('phonebookApp', ['naif.base64','720kb.datepicker'])
	.controller('MainController', MainController)
	.controller('ContactController', ContactController);