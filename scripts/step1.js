function setStep1() {
	var html = "<h1>Quels sont vos diplomes ?</h1>";

	html += "<h2>(Du plus récent au plus ancien)</h2>";
	for (var i = 0; i < formationNum; i++) {
		html += '<div class="block" id="Formation' + i + '" style="display:' + (i <= person.hasFormation() ? "block" : "none") + ';">'
		html += "<h3>Diplome " + (i+1) + "</h3>"
		html +=	'<span>Date de début</span><input id="startDate' + i + '" class="step1" type="text" value="' + person.formations[i].startDate + '"></input><br>';
		html +=	'<span>Date de fin</span><input id="endDate' + i + '" class="step1" type="text" value="' + person.formations[i].endDate + '"></input><br>';
		html +=	'<span>Etablissement</span><input id="school' + i + '" class="step1" type="text" value="' +  person.formations[i].school + '"></input><br>';
		html +=	'<span>Diplome</span><input id="formation' + i + '" class="step1" type="text" value="' + person.formations[i].formation + '"></input><br>';
		html +=	'<span>Compétences acquises</span> (100 caractères) <textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step1">' + person.formations[i].skills + '</textarea><br>';
		if (i < formationNum - 1 && i >= person.hasFormation())
			html += '<button class="plus newButtonColor" id="plus' + (i + 1) + '" onclick="showDiv(\'Formation\',' + (i + 1) + ', true);">+</button>';
		html += '</div>';
	}
	return (html);
}

function updateStep1() {
	for (var i = 0; i < formationNum; i++) {
		person.formations[i].startDate = getValue("startDate" + i);
		person.formations[i].endDate = getValue("endDate" + i);
		person.formations[i].school = getValue("school" + i);
		person.formations[i].formation = getValue("formation" + i);
		person.formations[i].skills = getValue("skills" + i);
	}
}