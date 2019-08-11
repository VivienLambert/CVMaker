function setStep1() {
	html = "<h1>Quels sont vos diplomes ?</h1>";
	html += "<h2>(Du plus récent au plus ancien)</h2>";
	for (i = 0; i < 3; i++) {
		html += '<div id="Formation' + i + '" style="display:' + (i <= person.hasFormation() ? "block" : "none") + ';">'
		html += "<h3>Diplome " + (i+1) + "</h3>"
		html +=	'<span>Date de début</span><input id="startDate' + i + '" class="step1" name="startDate" type="text" value="' + (person.formations ? (person.formations[i] ? person.formations[i].startDate : "") : "") + '"></input><br>';
		html +=	'<span>Date de fin</span><input id="endDate' + i + '" class="step1" name="endDate" type="text" value="' + (person.formations ? (person.formations[i] ? person.formations[i].endDate : "") : "") + '"></input><br>';
		html +=	'<span>Etablissement</span><input id="school' + i + '" class="step1" name="school" type="text" value="' + (person.formations ? (person.formations[i] ? person.formations[i].school : "") : "") + '"></input><br>';
		html +=	'<span>Diplome</span><input id="formation' + i + '" class="step1" name="formation" type="text" value="' + (person.formations ? (person.formations[i] ? person.formations[i].formation : "") : "") + '"></input><br>';
		html +=	'<span>Compétences acquises</span> (100 caractères) <textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step1" name="endDate">' + (person.formations ? (person.formations[i] ? person.formations[i].skills : "") : "") + '</textarea><br>';
		if (i < 2 && i >= person.hasFormation())
			html += '<button class="plus" id="plus' + (i + 1) + '" onclick="showDiv(\'Formation\',' + (i + 1) + ', true);">+</button>';
		html += '</div>';
	}
	return (html);
}

function getStep1() {
	for (i = 0; i < 3; i++) {
		person.addFormation(getValue("startDate" + i), getValue("endDate" + i), getValue("school" + i), getValue("formation" + i), getValue("skills" + i));
	}
}

function updateStep1() {
	for (i = 0; i < 3; i++) {
		person.formations[i].startDate = getValue("startDate" + i);
		person.formations[i].endDate = getValue("endDate" + i);
		person.formations[i].school = getValue("school" + i);
		person.formations[i].formation = getValue("formation" + i);
		person.formations[i].skills = getValue("skills" + i);
	}
}