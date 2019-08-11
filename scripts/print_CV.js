function printName() {
	var html = '<p id="name">';
	html += person.firstName + " " + person.name.toUpperCase();
	html += '</p>';
	return html;
}

function printCoord() {
	var html = "";
	if (person.address && person.postalCode && person.city) {
		html += '<p id="street">'
		html += person.address;
		html += '</p>';
		html += '<p id="city">';
		html += person.postalCode + " " + person.city.toUpperCase();
		html += '</p>';
	}
	if (person.phone) {
		html += '<p id="phone">';
		html += person.phone;
		html += '</p>';
	}
	if (person.mail) {
		html += '<p id="mail">';
		html += person.mail;
		html += '</p>';
	}
	if (person.linkedIn) {
		html += '<div id="linked">'
		html += '<img class="icon" alt="linkedIn Icon" src="https://www.shareicon.net/download/2017/06/30/888051_logo.ico"/>'
		html += '<a id="linkedIn" href="' + person.linkedIn + '">';
		html += person.linkedIn;
		html += '</a>';
		html += '</div>'
	}
	return html;
}

function printID() {
	var html = '<div id="ID">';
	html += printName();
	if (person.driving)
		html += '<p id="driving">' + person.driving + '</p>';
	html += '<h2>Coordonnées</h2>';
	html += printCoord();
	html += '</div>';
	return html;
}

function printCV() {
	savePrevious();
	style = document.getElementById("style");
	style.href = "style/cv.css";
	page = document.getElementById("page");
	html = '<div id="CV">';
	html += printID();
	html += '</div>';
	html += '<div id="buttons">';
	html += '<br><button id="previous" onclick="setForm(' + (stepMax) + ');">⇦</button>';
	html += '</div>';
	page.innerHTML = html;
}