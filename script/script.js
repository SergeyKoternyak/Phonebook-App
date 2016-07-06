class Contact{
	constructor(obj){
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
		this.organization = obj.organization;
		this.phones = obj.phones;
		this.country = obj.country;
		this.city = obj.city;
		this.street = obj.street;
		this.eMail = obj.eMail;
		this.skype = obj.skype;
		this.web = obj.web;
		this.linkedin = obj.linkedin;
		this.facebook = obj.facebook;
		this.twitter = obj.twitter;
		this.instagram = obj.instagram;
		this.birthday = obj.birthday;
		this.photo = obj.photo;
	}
}
class ContactsArch extends Array{
	saveArch(){
		localStorage.setItem('myContacts', JSON.stringify(this));
	}
	push(contact){
		super.push(contact);
		this.saveArch();
	}
	removeContact(index){
		this.splice(index, 1);
		this.saveArch();
	}
}

let app = angular.module('phonebookApp', ['naif.base64','720kb.datepicker']);
app.controller('mainCtrl', $scope => {
	$scope.myContacts = new ContactsArch;

	if(localStorage.getItem('myContacts')){
		angular.forEach(JSON.parse(localStorage.getItem('myContacts')), item => $scope.myContacts.push(new Contact(item)));
	}

	$scope.obj = {
		phones: ['']
	}

	$scope.newContact = obj => {
		let contact = new Contact(obj);
		$scope.myContacts.push(contact);
		// $scope.obj = {};
		$scope.obj = {
			phones: ['']
		}
	}

	$scope.remove = index => $scope.myContacts.removeContact(index);
})



// Контроллер контакта
app.controller('contactCtrl', ($scope, $filter, $rootScope) => {
	// Проверка дня рождения
	let nowDate = $filter('date')(new Date(), "d MMM yyyy");
	if($scope.contact.birthday === nowDate){
		$scope.birthdayToday = true;
	}

	// Сохранение отредактированных объектов
	$scope.$watch('contact', () => {
		localStorage.setItem('myContacts', JSON.stringify($scope.myContacts));
	}, true)

	// Установка фотографии
	$scope.getAvatar = () => {
		if($scope.contact.photo){
			return 'data:'+ $scope.contact.photo.filetype + ';base64,' + $scope.contact.photo.base64 
		} else{
			return 'styles/imgs/noAvatar.png'
		}
	}
})