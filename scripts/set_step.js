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
	if (document.getElementById("name"))
		updateStep0();
	if (document.getElementById("formation0"))
		updateStep1();
	if (document.getElementById("job0"))
		updateStep2();
	if (document.getElementById("skill00"))
		updateStep3();
}

function setForm(step) {
	var html = "";
	var style = document.getElementById("style");

	savePrevious();
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
			break;
		case 3:
			html = setStep3();
			break;
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