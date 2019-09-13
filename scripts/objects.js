function Skill(skillName = "", level = "1") {
	this.skillName = skillName;
	this.level = level;
}

function SkillCategory(catName = "", skillName = "", level = "1") {
	this.catName = catName;
	this.skills = [];
}

function Formation(startDate = "", endDate = "", formation = "", school = "", skills = "") {
	this.startDate = startDate;
	this.endDate = endDate;
	this.formation = formation;
	this.school = school;
	this.skills = skills
}

function Exp(startDate = "", endDate = "", employer = "", job = "", skills = "")
{
	this.startDate = startDate;
	this.endDate = endDate;
	this.employer = employer;
	this.job = job;
	this.skills = skills;
}

function Hobby(duration = "", title = "", skills = "")
{
	this.duration = duration;
	this.title = title;
	this.skills = skills;
}

function Person(name  = "", firstName = "", driving = "", address = "", postalCode = "", city = "", phone = "", mail = "", linkedIn = "", application = "", picture = "") {
	this.name = name;
	this.firstName = firstName;
	this.driving = driving;
	this.address = address;
	this.postalCode = postalCode;
	this.city = city;
	this.phone = phone;
	this.mail = mail;
	this.linkedIn = linkedIn;
	this.application = application;
	this.picture = picture;
	this.formations = [];
	this.exp = [];
	this.skillsCat = [];
	this.hobbies = [];

	this.hasExp = function() {
		var ret = 0;

		for (var i = 0; i < this.exp.length; i++) {
			if (this.exp[i].startDate || this.exp[i].endDate || this.exp[i].job
				|| this.exp[i].employer || this.exp[i].skills)
				ret = i;
		}
		return ret;
	}

	this.hasFormation = function() {
		var ret = 0;
		
		for (var i = 0; i < this.formations.length; i++) {
			if (this.formations[i].startDate || this.formations[i].endDate
				|| this.formations[i].school || this.formations[i].formation || this.formations[i].skills)
				ret = i;
		}
		return ret;
	}

	this.hasHobby = function() {
		var ret = 0;

		for (var i = 0; i < this.hobbies.length; i++) {
			if (this.hobbies[i].duration || this.hobbies[i].title || this.hobbies[i].skills)
				ret = i;
		}
		return ret;
	}

	this.hasSkill = function() {
		var ret = [0,[]];

		for (var i = 0; i < this.skillsCat.length; i++) {
			ret[1].push(0);
			if (this.skillsCat[i].catName != "") {
				ret[0] = i;
			}
			for (var j = 0; j < this.skillsCat[i].skills.length; j++) {
				if (this.skillsCat[i].skills[j].skillName != "")
				{
					ret[0] = i;
					ret[1][i] = j;
				}
			}
		}
		return ret;
	}

	this.addFormation = function(startDate = "", endDate = "", formation =  "", school = "", skills = "") {
		this.formations.push(new Formation(startDate, endDate, formation, school, skills));
	};

	this.addExp = function(startDate = "", endDate = "", employer = "", job = "", skills = "") {
		this.exp.push(new Exp(startDate, endDate, employer, job, skills));
	};

	this.addSkillCat = function(catName = "") {
		this.skillsCat.push(new SkillCategory(catName));
	};

	this.addSkill = function(cat = 0, skillName = "", level = "1") {
		this.skillsCat[cat].skills.push(new Skill(skillName, level));
	};
	this.addHobby = function(duration = "", title = "", skills = "") {
		this.hobbies.push(new Hobby(duration, title, skills));
	}
}