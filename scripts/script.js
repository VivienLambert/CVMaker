function Skill(skillName, level) {
	this.skillName = skillName;
	this.level = level;
}

function SkillCategory(catName, skillName, level) {
	this.catName = catName;
	this.skills = this.addSkill(skillName, level);

	this.addSkill = function(skillName, level) {
		this.skills.push(new Skill(skillName, level));
	};
}

function Formation(startDate, endDate, formation, school, skills) {
	this.startDate = startDate;
	this.endDate = endDate;
	this.formation = formation;
	this.school = school;
	this.skills = skills
}

function Exp(startDate, endDate, employer, job, skills)
{
	this.startDate = startDate;
	this.endDate = endDate;
	this.employer = employer;
	this.job = job;
	this.skills = skills;
}

function Person(name, firstName, driving, address, postalCode, city, phone, mail, linkedIn, application) {
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
	this.formations = [];
	this.exp = [];
	this.skills =[];

	this.addFormation = function(startDate, endDate, formation, school, skills) {
		this.formations.push(new Formation(startDate, endDate, formation, school, skills));
	};

	this.addExp = function(startDate, endDate, employer, job, skills) {
		this.exp.push(new Exp(startDate, endDate, employer, job, skills));
	};

	this.addSkill = function(catName, skillName, level) {
		if ((index = this.findCat(catName)) == -1) {
			this.skills.push(new SkillCategory(catName, skillName, level));
		} else {
			this.skills[index].addSkill(skillName,level);
		}
	};

	this.findCat = function(catName) {
		for (i = 0; i < this.skills.length; i++) {
			if (this.skills[i].catName == catName)
				return i;
		}
		return -1;
	}

	this.hasExp = function(i) {
		ret = 0;
		for (i = 0; i < this.exp.length; i++) {
			if (this.exp[i].startDate || this.exp[i].endDate || this.exp[i].job
				|| this.exp[i].employer || this.exp[i].skills)
				ret = i;
		}
		return ret;
	}

	this.hasFormation = function(i) {
		ret = 0;
		for (i = 0; i < this.formations.length; i++) {
			if (this.formations[i].startDate || this.formations[i].endDate
				|| this.formations[i].school || this.formations[i].formation || this.formations[i].skills)
				ret = i;
		}
		return ret;
	}
}

page = document.getElementById("page");
person = null;
stepMax = 3;
setForm(0);