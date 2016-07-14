class ArrayProx {};
ArrayProx.prototype = Array.prototype;

export default class ContactsArch extends ArrayProx{
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