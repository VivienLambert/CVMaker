function setStep4() {
	var html = "<h1>Quels sont vos loisirs ?</h1>";

	for (var i = 0; i < hobbiesNum; i++) {
		html += '<div class="block" id="hobby' + i + '" style="display:' + (i <= person.hasHobby() ? "block" : "none") + ';">'
		html += "<h3>Hobby " + (i+1) + "</h3>"
		html +=	'<span>Durée de pratique<br />(facultative, ex:"4 ans")</span><input id="duration' + i + '" class="step4" type="text" value="' + person.hobbies[i].duration + '"></input><br>';
		html +=	'<span>Nom du loisir</span><input id="title' + i + '" class="step4" type="text" value="' + person.hobbies[i].title + '"></input><br>';
		html +=	'<span>Compétences acquises/Intérêts<br />(100 caractères)</span><textarea rows="2" cols="50" maxlength="100" id="skills' + i + '" class="step4">' + person.hobbies[i].skills + '</textarea><br>';
		if (i < hobbiesNum - 1 && i >= person.hasHobby())
			html += '<button class="plus newButtonColor" id="plus' + (i + 1) + '" onclick="showDiv(\'hobby\',' + (i + 1) + ', true);">+</button>';
		html += '</div>';
	}
	return (html);
}

function updateStep4() {
	for (var i = 0; i < hobbiesNum; i++) {
		person.hobbies[i].duration = getValue("duration" + i);
		person.hobbies[i].title = getValue("title" + i);
		person.hobbies[i].skills = getValue("skills" + i);
	}
}