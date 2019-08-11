function setStep2() {
	html = "<h1>Quels sont vos précédents emplois ?</h1>";
	html += "<h2>(Du plus récent au plus ancien)</h2>";
	for (i = 0; i < 4; i++) {
		html += '<div id="Exp' + i + '" style="display:' + (i <= person.hasExp() ? "block" : "none") + ';">'
		html += "<h3>Expérience " + (i+1) + "</h3>"
		html +=	'<span>Date de début</span><input id="startDate' + i + '" class="step2" name="startDate" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].startDate : "") : "") + '"></input><br>';
		html +=	'<span>Date de fin</span><input id="endDate' + i + '" class="step2" name="endDate" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].endDate : "") : "") + '"></input><br>';
		html +=	'<span>Employeur</span><input id="employer' + i + '" class="step2" name="employer" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].employer : "") : "") + '"></input><br>';
		html +=	'<span>Intitulé du poste</span><input id="job' + i + '" class="step2" name="job" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].job : "") : "") + '"></input><br>';
		html +=	'<span>Compétences mises en place/mission</span> (100 caractères) <textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step1" name="endDate">' + (person.exp ? (person.exp[i] ? person.exp[i].skills : "") : "") + '</textarea><br>';
		if (i < 3 && i >= person.hasExp())
			html += '<button class="plus" id="plus' + (i + 1) + '" onclick="showDiv(\'Exp\',' + (i + 1) + ', true);">+</button>';
		html += '</div>';
	}
	return (html);
}

function getStep2() {
	for (i = 0; i < 4; i++) {
		person.addExp(getValue("startDate" + i), getValue("endDate" + i), getValue("employer" + i), getValue("job" + i), getValue("skills" + i));
	}
}

function updateStep2() {
	for (i = 0; i < 4; i++) {
		person.exp[i].startDate = getValue("startDate" + i);
		person.exp[i].endDate = getValue("endDate" + i);
		person.exp[i].employer = getValue("employer" + i);
		person.exp[i].job = getValue("job" + i);
		person.exp[i].skills = getValue("skills" + i);
	}
}