function setStep0() {
	html = "<h1>Bonjour, faisons connaissance !</h1>";
	html +=	'Nom<input id="name" class="step0" type="text" value ="' + (person ? person.name : "") + '"></input><br>';
	html +=	'Prénom<input id="firstName" class="step0" type="text" value ="' + (person ? person.firstName : "") + '"></input><br>';
	html +=	'Locomotion (ex:"Permis B")<input id="driving" class="step0" type="text" value ="' + (person ? person.driving : "") + '"></input><br>';
	html +=	'Adresse<input id="address" class="step0" type="text" value ="' + (person ? person.address : "") + '"></input><br>';
	html +=	'Code postal <input id="postalCode" class="step0" type="text" value ="' + (person ? person.postalCode : "") + '"></input><br>';
	html +=	'Ville<input id="city" class="step0" type="text" value ="' + (person ? person.city : "") + '"></input><br>';
	html +=	'Numéro de téléphone<input id="phone" class="step0" type="text" value ="' + (person ? person.phone : "") + '"></input><br>';
	html +=	'LinkedIn<input id="linkedIn" class="step0" type="text" value ="' + (person ? person.linkedIn : "") + '"></input><br>';
	html +=	'Poste désiré<input id="application" class="step0" type="text" value ="' + (person ? person.application : "") + '"></input><br>';
	return (html);
}

function getStep0() {
	return new Person(getValue("name"), getValue("firstName"), getValue("driving"), getValue("address"),
					getValue("postalCode"), getValue("city"), getValue("phone"), getValue("linkedIn"),getValue("application"));
}

function updateStep0() {
	person.name = getValue("name");
	person.firstName = getValue("firstName");
	person.driving = getValue("driving");
	person.address = getValue("address");
	person.postalCode = getValue("postalCode");
	person.city = getValue("city");
	person.phone = getValue("phone");
	person.linkedIn = getValue("linkedIn");
	person.application = getValue("application");
}