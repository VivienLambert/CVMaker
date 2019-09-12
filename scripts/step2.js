function setStep2() {
	var html = "<h1>Quels sont vos précédents emplois ?</h1>";

	html += "<h2>(Du plus récent au plus ancien)</h2>";
	for (var i = 0; i < expNum; i++) {
		html += '<div class="block" id="Exp' + i + '" style="display:' + (i <= person.hasExp() ? "block" : "none") + ';">'
		html += "<h3>Expérience " + (i+1) + "</h3>"
		html +=	'<span>Date de début</span><input id="startDate' + i + '" class="step2" type="text" value="' + person.exp[i].startDate + '"></input><br>';
		html +=	'<span>Date de fin</span><input id="endDate' + i + '" class="step2" type="text" value="' + person.exp[i].endDate + '"></input><br>';
		html +=	'<span>Employeur</span><input id="employer' + i + '" class="step2" type="text" value="' + person.exp[i].employer + '"></input><br>';
		html +=	'<span>Intitulé du poste</span><input id="job' + i + '" class="step2" type="text" value="' + person.exp[i].job + '"></input><br>';
		html +=	'<span>Compétences mises en place/mission</span> (100 caractères) <textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step1">' + person.exp[i].skills + '</textarea><br>';
		if (i < expNum - 1 && i >= person.hasExp())
			html += '<button class="plus newButtonColor" id="plus' + (i + 1) + '" onclick="showDiv(\'Exp\',' + (i + 1) + ', true);">+</button>';
		html += '</div>';
	}
	return (html);
}

function updateStep2() {
	for (var i = 0; i < expNum; i++) {
		person.exp[i].startDate = getValue("startDate" + i);
		person.exp[i].endDate = getValue("endDate" + i);
		person.exp[i].employer = getValue("employer" + i);
		person.exp[i].job = getValue("job" + i);
		person.exp[i].skills = getValue("skills" + i);
	}
}