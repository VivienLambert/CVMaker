function setStep3() {
	var skillsCount = person.hasSkill();
	var html = "<h1>Quelles sont vos compétences ?</h1>";

	for (var i = 0; i < catNum; i++) {
		html += '<div class="block" id="block' + i + '" style="display:' + (i <= skillsCount[0] ? "block" : "none") + ';">'
		html +=	'<h3>Catégorie</h3><input id="cat'
				+ i + '" class="step3" type="text" value="' + person.skillsCat[i].catName
				+ '"></input><br>';
		for (var j = 0; j < skillsNum; j++) {
			html += '<div class="underBlock" id="underBlock' + i + j + '" style="display:' + (j <= skillsCount[1][i] ? "block" : "none") + ';">'
			html +=	'<span>Compétence</span><input id="skill' + i + j
					+ '" class="step3" type="text" value="' + person.skillsCat[i].skills[j].skillName
					+ '"></input><br>';
			html +=	'<span>Niveau</span><input id="level' + i + j
					+ '" class="step3" type="range" min="1" max="9" value="' + person.skillsCat[i].skills[j].level
					+ '"></input><br>';
			if (j < skillsNum - 1 && i >= skillsCount[1][i])
				html += '<button class="plusTxt" id="plus' + i + (j + 1) + '" onclick="showDiv(\'underBlock\', \'' + i + (j + 1) + '\', true);">Nouvelle compétence</button>';
			html += '</div>'
		}
		if (i < catNum - 1 && (i >= skillsCount[0]))
			html += '<button class="plusTxt newButtonColor newCateg" id="plus' + (i + 1) + '" onclick="showDiv(\'block\',' + (i + 1) + ', true);">Nouvelle catégorie</button>';
		html += '</div>';
	}
	return (html);
}

function updateStep3() {
	for (var i = 0; i < catNum; i++) {
		person.skillsCat[i].catName = getValue("cat" + i);
		for (var j = 0; j < skillsNum; j++) {
			person.skillsCat[i].skills[j].skillName = getValue("skill" + i + j);
			person.skillsCat[i].skills[j].level = getValue("level" + i + j);
		}
	}
}