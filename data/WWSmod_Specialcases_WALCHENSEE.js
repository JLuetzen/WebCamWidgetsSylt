// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;

// Ausgelagerte Funktionen für das WebScraping.
// Diese Funktion wird einmal pro Tag vom Server geladen.
// So ist bei Fehlern ein automatisches Update auf den geänderten Code innerhalb eines Tages möglich
//

	module.exports.determineSpecialCase = async function(specialcase) {

//	var movietimestamp = "Jens says hello";  // setting a default value
	var myJS;  		// my Java Script to analze Webpages
	var response; 	// holds the results of myJS after execution
	var timestamp;
	var time;
	var webview;
	var res;
	var req;

	console.log("im Modul Specialcase: V12");

	myArray = specialcase.split("*");
	camLocation = myArray[0];
	camProvider = myArray[1];
	imgURL = myArray[2];
	camURL = myArray[3];
	movietimestamp = myArray[4];
	customLogo = myArray[5];

	console.log("Eingang Specialcases: camFamily: " + camLocation);
	console.log("Eingang Specialcases: camProvider: " + camProvider);
	console.log("Eingang Specialcases: imgURL: " + imgURL);
	console.log("Eingang Specialcases: camURL: " + camURL);
	console.log("Eingang Specialcasesl: movietimestamp: " + movietimestamp);
	console.log("Eingang Specialcases: customLogo (sollte leer sein): " + customLogo);

//
// Zeitstempel...
//
		let actualdate = new Date(); // für das heutige Datum
		let lastrefresh = new DateFormatter();
		lastrefresh.useShortDateStyle();
		lastrefresh.useShortTimeStyle();
		timestamp = lastrefresh.string(actualdate);
		time = timestamp.substr(-5);


switch ( camProvider ) {

	case ("https://www.addicted-sports.com") :
//		switch ( camURL ) {
//			case ("https://www.addicted-sports.com/webcam/brombachsee/allmannsdorf/") :
//			case ("https://www.addicted-sports.com/webcam/chiemsee/uebersee/"):

		if (camURL.substr(-3)!= "jpg") {

				webview = new WebView();
				req = new Request(camURL);
				res = await req.loadString();
				await webview.loadHTML(res,camURL);

				var myJS = `
				(function() {
				try {
					var x = document.getElementById('streamvideo').innerHTML;
				}
				catch(err) {
					console.log("StreamVideo NICHT vorhanden // ABBRUCH EMPFOHLEN");
					var x = "Error - no video";
					completion(x);
					return;
				}
				console.log("StreamVideo ist vorhanden --> Weitermachen...");
				var x = document.getElementById('streamvideo').innerHTML;
				 completion(x);
				return;
				})();
				`

				var response = await webview.evaluateJavaScript(myJS, true);
				console.log("Nach dem JS!");
				console.log("Script-Ergebnis: " + response);

				if (response == "Error - no video") {
					console.log("Zeige aktuelles Livebild")
					camURL = imgURL;
					movietimestamp = "Kein Video verfügbar -> Livebild"
					specialcase = camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp;
				}
				else {

	// Building movielink part (back end of URL)
				var partsArray = response.split(/"/);
				var movielink = partsArray[1];
				console.log("MovieLink : " + movielink);

	// building Domain part (front nose of URL)
				partsArray = camURL.split("/");
				camURL = partsArray[0] + "//" + partsArray[2];
				console.log("Front Nose of URL");
				camURL = camURL + movielink;
				console.log("Komplette VideoURL: " + camURL);

// extracting Movie timestamp from MovieLink
				movietimestamp = "Video from: " + movielink.substr(-8,2) + ":" + movielink.substr(-6,2);
				console.log("Timestamp : " + movietimestamp);
				specialcase = camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp;
				}
			}
	//		break;

		else {

			}

		break;

//
// Ende Auslesen VideoURL https://www.addicted-sports.com
//

//
// Special Case Prienavera
// Der URL zum Bild trägt einen Zeitstempel, der ausgelesen wird
// dieses Bild ist Vorschaubild und Bild in der Großansicht
//
	case ("https://www.prienavera.de") :
//		if ( camProvider == "https://www.prienavera.de" ){
				console.log("PRIENAVERA in der IF Funktion 7");
				console.log("PRIENAVERA: camURL lautet: " + camURL);
				webview = new WebView();
				req = new Request(camURL);
				res = await req.loadString();
				await webview.loadHTML(res, camURL);
				console.log("PRIENAVERA nach loadHTML");

				var myJS = `
				(function() {
				var x = document.querySelector('.webcamimage').src
				 completion(x);
				return;
				})();
				`

				console.log("PRIENAVERA nach JScript");
				var response = await webview.evaluateJavaScript(myJS, true);
				console.log("im Modul: Response Prien: " + response);

				imgURL = response;
				camURL = response
				// extracting Movie timestamp from MovieLink
				movietimestamp = "Picture from: " + camURL.substr(-9,2) + ":" + camURL.substr(-7,2);
				console.log("im Modul: Timestamp Prien: " + movietimestamp);
				specialcase = camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp;
//			}

	break;
	//
	// Ende prienavera
	//


// Special Case https://www.golfclubsylt.de/
// Auslesen der Adresse der Webcam, die sich alle 10 s ändert
// dieses Bild ist Vorschaubild. Für das Bild in der Großansicht gehts auf die HP
//
	case ("https://www.golfclubsylt.de") :
//	if ( camProvider == "https://www.golfclubsylt.de" ){
			console.log("in Golfclub : " + camURL);
			webview = new WebView();
			console.log("Golfclub : " + camURL)
			req = new Request(camURL);
			res = await req.loadString();
			await webview.loadHTML(res, camURL);

			var myJS = `
			(function() {
			var x = document.querySelectorAll('figure.image_container img')[1].src
			 completion(x);
			return;
			})();
			`
			var response = await webview.evaluateJavaScript(myJS, true);
			console.log("Response Golfclub: " + response);
			imgURL = response;
// der URL für das Großbild camURL verweist auf die WebSite, da ist immer das max 10s alte Bild zu sehen
			specialcase = camProvider + "*" + imgURL + "*" + camURL + "*" + movietimestamp;
//	}

	break;
	//
	// Ende Golfclub Sylt
	//

} // Ende switch

//
// Ab hier gehts um das Custom logo
//

switch ( camLocation ) {

	case ("Kochelsee") :
		customLogo = "/CustomLogos/WWS_Logo_Eastern_2022.png"
	break;

	}
// Ende Switch camProvider für CustomLogo

specialcase = specialcase  + "*" + customLogo;

/*
//
// Und hier noch einmal das Ergebnis:
// (Kommentar kann entfernt werden bei Interesse
//
myArray = specialcase.split("*");
	camProvider = myArray[0];
	imgURL = myArray[1];
	camURL = myArray[2];
	movietimestamp = myArray[3];

	console.log("Ende Modul: camProvider: " + camProvider);
	console.log("Ende Modul: imgURL: " + imgURL);
	console.log("Ende Modul: camURL: " + camURL);
	console.log("Ende Modul: movietimestamp: " + movietimestamp);
*/
	return specialcase;

}
// ENDE
