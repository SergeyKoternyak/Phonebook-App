import Contact from './contact.js';
import ContactsArch from './contactsArch.js';

// Основной контроллер
export default class MainController {
	constructor($scope) {
		$scope.myContacts = new ContactsArch;

		// Извлечение контактов из LS
		if(localStorage.getItem('myContacts')){
			angular.forEach(JSON.parse(localStorage.getItem('myContacts')), item => {
				if(item){
					$scope.myContacts.push(new Contact(item))
				}
			});
		}

		$scope.obj = {
			phones: ['']
		}

		// Создание нового контакта
		$scope.newContact = obj => {
			let contact = new Contact(obj);
			$scope.myContacts.push(contact);
			$scope.obj = {};
			$scope.obj = {
				phones: ['']
			}
		}

		// Удаление контакта
		$scope.remove = index => $scope.myContacts.removeContact(index);
	}
}

MainController.$inject = ['$scope'];