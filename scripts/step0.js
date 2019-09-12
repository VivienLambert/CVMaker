function setStep0() {
	var html = "<h1>Bonjour, faisons connaissance !</h1>";

	html +=	'Nom<input id="name" class="step0" type="text" value ="' + person.name + '"></input><br>';
	html +=	'Prénom<input id="firstName" class="step0" type="text" value ="' + person.firstName + '"></input><br>';
	html +=	'Locomotion (ex:"Permis B")<input id="driving" class="step0" type="text" value ="' + person.driving + '"></input><br>';
	html +=	'Adresse<input id="address" class="step0" type="text" value ="' + person.address + '"></input><br>';
	html +=	'Code postal <input id="postalCode" class="step0" type="text" value ="' + person.postalCode + '"></input><br>';
	html +=	'Ville<input id="city" class="step0" type="text" value ="' + person.city + '"></input><br>';
	html +=	'Numéro de téléphone<input id="phone" class="step0" type="text" value ="' + person.phone + '"></input><br>';
	html +=	'Adresse e-mail<input id="mail" class="step0" type="text" value ="' + person.mail + '"></input><br>';
	html +=	'LinkedIn<input id="linkedIn" class="step0" type="text" value ="' + person.linkedIn + '"></input><br>';
	html +=	'Poste désiré<input id="application" class="step0" type="text" value ="' + person.application + '"></input><br>';
	html +=	'URL de votre photo<input id="picture" class="step0" type="text" value ="' + person.picture + '"></input><br>';
	return (html);
}

function updateStep0() {
	person.name = getValue("name");
	person.firstName = getValue("firstName");
	person.driving = getValue("driving");
	person.address = getValue("address");
	person.postalCode = getValue("postalCode");
	person.city = getValue("city");
	person.phone = getValue("phone");
	person.mail = getValue("mail");
	person.linkedIn = getValue("linkedIn");
	person.application = getValue("application");
	person.picture = getValue("picture");
}