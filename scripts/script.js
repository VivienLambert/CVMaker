const stepMax = 4;
const formationNum = 3;
const expNum = 4;
const catNum = 4;
const skillsNum = 5;
const hobbiesNum = formationNum;

var page = document.getElementById("page");
var person = new Person;
for (var i = 0; i < formationNum; i++) {
	person.addFormation();
	person.addHobby();
}
for (var i = 0; i < expNum; i++)
	person.addExp();
for (var i = 0; i < catNum; i++)
{
	person.addSkillCat();
	for (var j = 0; j < skillsNum; j++)
		person.addSkill(cat = i);
}
setForm(0);