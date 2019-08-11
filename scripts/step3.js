function setStep3() {
	html = "<h1>Quelles sont vos compétences ?</h1>";
	html += "<h3>Atouts</h3>";
	for (i = 0; i < 4; i++) {
		html += '<div id="' + '">'
		html +=	'<span>Date de début</span><input id="startDate' + i + '" class="step2" name="startDate" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].startDate : "") : "") + '"></input><br>';
		html +=	'<span>Date de fin</span><input id="endDate' + i + '" class="step2" name="endDate" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].endDate : "") : "") + '"></input><br>';
		html +=	'<span>Employeur</span><input id="employer' + i + '" class="step2" name="employer" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].employer : "") : "") + '"></input><br>';
		html +=	'<span>Intitulé du poste</span><input id="job' + i + '" class="step2" name="job" type="text" value="' + (person.exp ? (person.exp[i] ? person.exp[i].job : "") : "") + '"></input><br>';
		html +=	'<span>Compétences mises en place/mission</span> (100 caractères) <textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step1" name="endDate">' + (person.exp ? (person.exp[i] ? person.exp[i].skills : "") : "") + '</textarea><br>';
	}
	return (html);
}

function getStep3() {
	for (i = 0; i < 4; i++) {
		person.addExp(getValue("startDate" + i), getValue("endDate" + i), getValue("employer" + i), getValue("job" + i), getValue("skills" + i));
	}
}

function updateStep3() {
	for (i = 0; i < 4; i++) {
		person.exp[i].startDate = getValue("startDate" + i);
		person.exp[i].endDate = getValue("endDate" + i);
		person.exp[i].employer = getValue("employer" + i);
		person.exp[i].job = getValue("job" + i);
		person.exp[i].skills = getValue("skills" + i);
	}
}