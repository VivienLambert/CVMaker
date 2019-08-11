function getValue(id) {
	if (document.getElementById(id))
		return (document.getElementById(id)).value;
	return "";
}

function showDiv(id, num, bool) {
	div = document.getElementById(id + num);
	button = document.getElementById("plus" + num);
	if (div && bool === true)
	{
		div.style.display = "block";
		if (button)
			button.style.display = "none";	
	}
	else if (div && bool === false)
		div.style.display = "none";
}

function savePrevious(){
	if (document.getElementById("CV"))
		return;
	if (document.getElementById("name")) {
		if (!person)
			person = getStep0();
		else
			updateStep0();
	}
	if (document.getElementById("formation0")) {
		if (!(person.formations[0]))
			getStep1();
		else
			updateStep1();
	}
	if (document.getElementById("job0")) {
		if (!(person.exp[0]))
			getStep2();
		else
			updateStep2();
	}
}

function setForm(step) {
	html = "";
	savePrevious();
	style = document.getElementById("style");
	style.href = "style/style.css";
	switch (step) {
		case 0:
			html = setStep0();
			break;
		case 1:
			html = setStep1();
			break;
		case 2:
			html = setStep2();
	}
	html += '<div id="buttons">';
	if (step != 0)
		html += '<button id="previous" onclick="setForm(' + (step - 1) + ');">⇦</button>';
	if (step <= stepMax - 1)
		html += '<button id="next" onclick="setForm(' + (step + 1) + ');">⇨</button>';
	else
		html += '<button id="next" onclick="printCV();">✔</button>';
	html += '</div>';
	page.innerHTML = html;
}