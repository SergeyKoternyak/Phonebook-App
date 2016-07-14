// Контроллер контакта
export default class ContactController{
	constructor($scope, $filter, $rootScope) {
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
	}
}

ContactController.$inject = ['$scope', '$filter', '$rootScope'];