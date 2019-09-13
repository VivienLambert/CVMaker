function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function printName() {
	var html = "";

	if (person.picture != "") {
		html += '<img id="picture" src="' + person.picture + '">'
	}
	if (person.name == "" && person.firstName == "")
		return "";
	html += '<h1 id="name">';
	html += capitalize(person.firstName) + " " + person.name.toUpperCase();
	html += '</h1>';
	return html;
}

function printCoord() {
	var html = "";

	if (person.address != "" && person.postalCode != "" && person.city != "") {
		html += '<p id="street">'
		html += person.address;
		html += '</p>';
	}
	if (person.city != "") {
		html += '<p id="city">';
		html += person.postalCode + " " + person.city.toUpperCase();
		html += '</p>';
	}
	if (person.phone != "") {
		html += '<p id="phone">';
		html += person.phone;
		html += '</p>';
	}
	if (person.mail != "") {
		html += '<p id="mail">';
		html += person.mail;
		html += '</p>';
	}
	if (person.linkedIn != "") {
		html += '<div id="linked">'
		html += '<img class="icon" alt="linkedIn Icon" src="https://www.shareicon.net/download/2017/06/30/888051_logo.ico"/>'
		html += '<a id="linkedIn" href="' + person.linkedIn + '">';
		html += person.linkedIn;
		html += '</a>';
		html += '</div>'
	}
	return html;
}

function printPoint(cat, skill) {
	var html = '<div id="pointLine">';
	var full = "";

	for (var point = 1; point < 10; point++) {
		if (parseInt(person.skillsCat[cat].skills[skill].level) >= point)
			full = " fullPoint";
		html += '<div class="skillPoint' + full + '"></div>';
		full = "";
	}
	html += '</div>';
	return html;
}

function printSkills() {
	var skillCount = person.hasSkill();
	var html = "";
	var buffer = "";
	
	for (var i = 0; i <= skillCount[0]; i++) {
		if (person.skillsCat[i].catName != "" && person.skillsCat[i].skills[0].skillName != "") {
			buffer += '<h2>' + person.skillsCat[i].catName + '</h2>';
			for (var j = 0; j <= skillCount[1][i]; j++) {
				if (person.skillsCat[i].skills[j].skillName != "") {
					buffer += '<div class="skillLine">';
					buffer += '<p>' + person.skillsCat[i].skills[j].skillName + '</p>';
					buffer += printPoint(i, j);
					buffer += '</div>';
				}
			}
		}
	}
	if (buffer != "") {
		html += '<div id="skills">';
		html += buffer;
		html += "</div>";
	}
	return html;
}

function printID() {
	var html = "";
	var coord = "";
	var buffer = "";

	buffer += printName();
	if (person.driving != "")
		buffer += '<p id="driving">' + capitalize(person.driving) + '</p>'; 
	coord = printCoord();
	if (coord != "")
		buffer += '<h2>Coordonnées</h2>';
	buffer += coord;
	buffer += printSkills();
	if (buffer != "") {
		html = '<div id="ID">';
		html += buffer;
		html += '</div>';
	}
	return html;
}

function printArray(table = [], title = "", job = false, formation = false){
	var html = "";
	var	buffer = "";
	var name = "";
	var place = "";

	for (var i = 0; i < table.length; i++) {
		name = job == true ? table[i].job : table[i].formation;
		place = job == true ? table[i].employer : table[i].school;
		if (name != "" && table[i].startDate != "") {
			buffer += '<tr class="titleRaw"><td>' + table[i].startDate;
			buffer += (table[i].endDate != "" ? "-" : "") + table[i].endDate + "</td>";
			buffer += "<td>" + capitalize(name) +"</td></tr>";
			buffer += '<tr><td></td><td class="place">' + capitalize(place) + "</td></tr>";
			buffer += '<tr><td></td><td>' + capitalize(table[i].skills.replace(/\n/g, "<br />")) + "</td></tr>";
		}
	}
	if (buffer != "") {
		html += '<div id="' + title + '">';
		html += '<h2>' + title + '</h2><hr \\><table>';
		html += buffer;
		html += '</table></div>';
	}
	return html;
}

function printHobbies() {
	var html = "";
	var buffer = "";

	for (var i = 0; i < person.hobbies.length; i++) {
		if (person.hobbies[i].title != "") {
			buffer += '<p class="titleRaw">' + capitalize(person.hobbies[i].title);
			buffer += (person.hobbies[i].duration? "-" + person.hobbies[i].duration : "");
			buffer += '</p><p>' + capitalize(person.hobbies[i].skills.replace(/\n/g, "<br />")) + "</p>"
		}
	}
	if (buffer != "") {
		html += '<div id="hobbies">';
		html += '<h2>Centres d\'intérêts</h2><hr \\>';
		html += buffer;
		html += '</div>';
	}
	return html;
}

function printExp() {
	var html = "";
	var buffer = "";
	
	if (person.application != "")
		buffer += '<h1 id="titleCV">' + capitalize(person.application) + '</h1>';
	buffer += printArray(person.formations, "Formations", false, true);
	buffer += printArray(person.exp, "Expériences professionnelles", true);
	buffer += printHobbies();
	if (buffer != "") {
		html = '<div id="expCV">';
		html += buffer;
		html += '</div>';
	}
	return html;
}

function printCV() {
	savePrevious();

	var page = document.getElementById("page");
	var style = document.getElementById("style");
	var resume = "";
	var html = "";
	
	resume = printID() + printExp();
	if (resume != "") {
		style.href = "style/cv.css";
		html = '<div id="CV">';
		html += resume;
		html += '</div>';
	} else {
		html = "Vous n'avez pas indiqué suffisamment d'éléments pour un début de CV, je vous invite à retourner au questionnaire."
	}
	html += '<div id="buttons">';
	html += '<br><button id="previous" onclick="setForm(' + (stepMax) + ');">⇦</button>';
	html += '</div>';
	page.innerHTML = html;
}