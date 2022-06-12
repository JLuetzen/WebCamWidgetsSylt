
<head>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<!--- <link rel="shortcut icon" type="image/x-icon" href="./assets/favicon.png?"> --->

</head>

![image](images/IMG_0184_corrected_20210403_Banner_Logo.jpg "Banner-List-Ellenbogen")

# Webcam Widgets Sylt -  live auf dem iPhone

### 12.06.20222: neue Version WWS_Master.js ab sofort verfügbar - Eine für Alles - 
Ab sofort steht neben den bewährten Scripts eine neue Version **WW_Master.js** zur Verfügung, die [HIER](https://gist.github.com/JLuetzen/4682350fd2f7cfa3c1f6a1eab448ef61) zum Download bereitsteht. Die Vorteile dieser neuen Version sind
* Kinderleichtes Einrichten durch vordefinierte Namen (Auf der [Download-Seite](https://gist.github.com/JLuetzen/4682350fd2f7cfa3c1f6a1eab448ef61) erklärt)
* Darstellung Sonnenaufgangs- und Sonnenuntergangszeiten (rechts unten)
* Nennung der Website der WebCam (rechts unten)
* erleichterte Erweiterung um neue WebCams ohne Neu-Installation 
* Bessere Benutzerunterstützung bei fehlerhafter Einrichtung
* tägliche Aktualisierung der WebCam-Listen
* News-Zeile vorgesehen (links)

Das Ergebnis kann sich sehen lassen:
<table class="center">
  <tr>
    <td text align="center"><img src="images/WWSv2-1.jpeg" title="Sylt-Shuttle"></td>
    <td text align="center"><img src="images/WWSv2-2.jpeg" title="FRS-Syltfähre"></td>
    <td text align="center"><img src="images/WWSv2-3.jpeg" title="Livespotting & andere"></td>
  </tr>
</table>

Die wesentlichen Neuerungen sind, falls es interessiert, weiter unten genannt.

------------------------------------------------
### Einleitung
Hier ist eine Sammlung von Webcam Widgets von Sylt. Widgets, das sind kleine Apps, die Informationen direkt auf dem Homescreen vom Smartphone darstellen und eben nicht nur das App-Symbol.
Diese hier zeigen Bilder von WebCams auf der wundervollen Nordsee-Insel Sylt.

Wie das genau auf dem Smartphone aussieht, zeigt dieses Video: [https://youtu.be/xDe2LnULC7Y](https://youtu.be/xDe2LnULC7Y)

{% include youtubePlayer.html id="xDe2LnULC7Y" %}

<br>
Desweiteren gibt es [dieses kommentierte](https://youtu.be/okgi-ZKg_PY) Video und vom Sylt-Shuttle [dieses unkommentierte](https://youtu.be/En-h2LZYh1w) YouTube-Video, um sich einen Eindruck zu verschaffen.

Für alle, die nicht auf ihre Lieblings-Insel können (wie ich 😉) bietet sich somit hier die Gelegenheit, Live-Bilder und Streams sehr bequem anzusehen.
Wer aber auf die Insel reisen möchte oder sie wieder verlassen muss, der findet hier ein sehr angenehmes Angebot, sich über die Situation an den Verladestationen in Westerland oder Niebüll sowie an den Fähranlegern in List oder Havneby zu informieren.
Das macht diese Widgets so attraktiv.

Das iPhone aktualisiert diese Bilder alle 15-20 min und damit sind die Bilder immer aktuell.
Der Livestream der WebCam öffnet sich, wenn man das Bild antippt.

------------------------------------------------
### Neuerungen in WWS_Master.js

Diese Neuerungen sind in dem Script der 2. Generation umgesetzt:
* die Daten der Cams stehen jetzt nicht mehr im Script, sondern in einer zentralen Datei, die das Script täglich 1x aktualisiert. Dadurch kommt der Benutzer viel schneller in den Genuss neuer verfügbarer Cams. Die Textdateien mit den Daten der Cams liegen hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Die Parameter pro Script werden in einer zentralen Datei geführt, die auch täglch 1x aktualisiert wird. Damit kann zentral und schnell auf Änderungsbedarf reagiert werden, ohne das Script selber ändern zu müssen. Die Parameter-Datei _WWSmod_Paramters.js_ mit den Parametern der einzelnen Scripte liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Auf einigen WebCams sind die Informationen zu den WebCams oder Livestreams mit Zeitstempeln versehen. Damit ändert sich laufend der Verweis auf die WebCam und das kann zu ärgerlichen Widget-Fehlern führen. Mit der neuen Scriptversion werden die gerade gültigen Pfade zu den Medien direkt von der Website des Herstellers ausgelesen, wenn das Widget sich aktualisiert. Auch dieses Verfahren kann sich laufend ändern und deshalb wird die Datei 1x pro Tag aktualisiert. Die Parameter-Datei _WWSmod_Specialcases.js_ mit den Auslese-Routinen von den Websites liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)

------------------------------------------------

Richtig interessant wird es, wenn man die Bilder auf dem Homescreen kombiniert, z.B. die Bilder von der Verladestation in Niebüll mit denen vom Fähr-Anleger in Havneby.
So weiß man bei der Anreise immer, wie viel gerade los ist und ob man unter Umständen mit Wartezeiten rechnen muss.

Gleiches gilt natürlich auch für die Abreise mit der Kombination Verladestation Westerland und Fähranleger List.

Hier einmal das Beispiel für die Anreise von Ostern 2021:

![image](images/IMG_0447_Ostern.jpg "Anreise")

Hier noch ein paar Impressionen, wie man sich die Widgets einrichten kann:

<table class="center">
  <tr>
    <td text align="center"><img src="images/IMG_1070.jpeg" title="Sylt-Shuttle"></td>
    <td text align="center"><img src="images/IMG_1075.jpeg" title="FRS-Syltfähre"></td>
    <td text align="center"><img src="images/IMG_1076.jpeg" title="Livespotting & andere"></td>
  </tr>
</table>

Cool, oder? Now have fun and enjoy!

-JL-

------------------------------------------------
Übrigens:
Die Firma Livespotting hat einen Blog-Eintrag zu diesem Projekt veröffentlicht: [HIER](https://livespotting.com/blog/ios-widget-fuer-livespotting-webcams-sylt)

![Livespotting_Blog_Eintrag](images/livestreaming-open-source-app-sylt.jpg "livestreaming-open-source-app-sylt")


------------------------------------------------

### 2,99 € für die Kaffeedose


Wenn Euch die Widgets gefallen, würde ich mich über einen Einwurf in meine Kaffedose sehr freuen. Vielen herzlichen Dank!

<a href="https://www.buymeacoffee.com/8gy54qdgqyq/e/61153" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>


Und wenn es irgendwo hakt, bei Fragen oder Problemen bin ich hier erreichbar: [kliffkieker67@gmail.com](mailto:kliffkieker67@gmail.com).

------------------------------------------------

### Aufkleber....

![IMG_1201](https://user-images.githubusercontent.com/76537507/125843823-b743bf3d-b305-4e16-9646-dd337ec3472e.jpeg)


Ich gebe diese Aufkleber weg für 1,50 € pro Stück plus Porto (90 ct) , wenn Ihr den Betrag in die Paypal Kaffeedose einzahlt und mir per eMail Bescheid gebt.

Die Aufkleber sind rund, 7 cm Durchmesser, weiße Schrift auf transparenter Folie.

Versand erfolgt allerdings nur innerhalb Deutschlands.


------------------------------------------------

### Surfcams Bayern

Auch an den Bayrischen Seen gibt es Webcams, die von Surfern genutzt werden.
Das Widget zu diesen Cams findet Ihr [HIER](https://gist.github.com/JLuetzen/32108386834dce1f2c2de70ca597626f), bitte da den Hinweis beachten.

Diese Seen sind eingebunden:
* Brombachsee
* Altmühlsee
* Chiemsee
* Ammersee
* Walchensee
* Kochelsee
* Starnbergersee
* Tegernsee
* Gardasee


------------------------------------------------

### CSML-Edition

Webcams im Norden... [HIER](https://gist.github.com/JLuetzen/4682350fd2f7cfa3c1f6a1eab448ef61) zu finden

Diese Webcams sind eingebunden:
* Sankt Peter-Ording, Badestelle Ording
* Sankt Peter-Ording, Erlebnispromenade
* Sankt Peter-Ording, Küstenpanorama
* Büsum I
* Büsum II
* Büsum Deichhausen
* Greetsiel (derzeit offline)


------------------------------------------------

### "Das will ich auch..."

Wenn Ihr Webcams habt, die ich Euch in Widgets einbinden soll oder für die ich Euch Widgets schreiben soll, dann meldet Euch gerne per Mail bei mir.


------------------------------------------------

![image](images/DSC01323_Banner.JPG "Banner-Kliffende")

------------------------------------------------
### Danke an
- Sabine
- D. Erdmann, [Hotel Rungholt](https://hotel-rungholt.de), Kampen
- C. Kochanek, [C-A Ferienwohnung Sylt](https://www.cundasylt.de), Westerland
- S. Erbeck, [Livespotting.com](https://livespotting.com)
- H.-J. Rotter, [feratel media Technologies GmbH](https://www.feratel.com/)
- M. Franzen, P. Villwock, Insel Sylt Tourismus-Service, [www.insel-sylt.de](https://www.insel-sylt.de)
- M. Hoppe, [www.nordwind-ev.de](https://www.nordwind-ev.de)

------------------------------------------------
#### Hashtags:
#sylt #sychtig #syltliebe #kampensylt #einflirtfürsleben #syltfähre
#webcamwidgets #webcamwidgetssylt

------------------------------------------------
#### News:

##### 2022-06-12
Die neue Version WWS_Master.js steht ab sofort zur Verfügung, eine für alles. 
[Hier](https://gist.github.com/JLuetzen/4682350fd2f7cfa3c1f6a1eab448ef61) gehts zum Download

------------------------------------------------
##### 2022-02-06
Die geänderte Adresse der Webcam am Altmühlsee ist eingearbeitet und neu ist die WebCam an der Prienavera mit schönem Blick auf die Halbinsel, den See und das Alpenpanorama dahinter. Damit die Änderungen sichtbar werden, muss das Script "WebCams_Surfcams_Bayern" neu geladen werden, es ist [Hier](https://gist.github.com/JLuetzen/32108386834dce1f2c2de70ca597626f) zu finden.

------------------------------------------------
##### 2021-08-20
Der Fehler beim Sylt Shuttle Widget mit der ausgefallenen Webcam von der Verladung in Westerland ist korrigiert. [Hier](https://bit.ly/3dj5YcN) geht's zum Widget zum Aktualisieren.



[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjluetzen.github.io%2FWebCamWidgetsSylt%2F&count_bg=%230277BD&title_bg=%23555555&icon=slideshare.svg&icon_color=%23E7E7E7&title=Besucher&edge_flat=false)](https://hits.seeyoufarm.com)


------------------------------------------------
# Scripts der ersten Generation
Zu allen Widgets geht es [hier entlang:](https://gist.github.com/JLuetzen)
Ihr findet da alles, den Code und die Installations-Anleitung in Text und als YouTube-Video.
Das erste Video erklärt, wie das Widget-Script von Github nach Scriptable gebracht wird: [https://youtu.be/tRHFpwIr_l0](https://youtu.be/tRHFpwIr_l0)
Das zweite Video stellt dann dar, wie danach das Widget eingerichtet wird [https://youtu.be/LnrikIM3T0U](https://youtu.be/LnrikIM3T0U) .

Ihr werdet sehen, das ist alles sehr einfach.

<table class="center">
  <tr>
    <th>7 Webcams Livespotting & andere von Sylt</th>
    <th>6 Webcams Autozug Sylt-Shuttle</th>
    <th>3 WebCams Syltfähre</th>
  </tr>
  <tr>
    <td text align="center"><img src="images/Preview_Livespotting.jpg" title="Livespotting.com"></td>
    <td text align="center"><img src="images/Preview_SyltShuttle.jpg" title="Sylt-Shuttle"></td>
    <td text align="center"><img src="images/Preview_SyltFaehre.jpg" title="FRS-Syltfähre"></td>

  </tr>
  <tr>
    <td text align="center"><a href="https://bit.ly/3b2wrsd">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3dj5YcN">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3eCBe7d">[Link zum Einrichten]</a></td>
  </tr>
</table>


