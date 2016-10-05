function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	// mozhna to inaczej napisac - placeholder.setAttribute("src",source);  - CEJ METOD VXODYT DO DOM LEVEL1 specification.
	//vin pidtrymujetsja y vsix brayzerax;
	placeholder.src = source;
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.innerHTML=text; // we can write description.firstChild.nodeValue = text;
}

