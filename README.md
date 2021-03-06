#dbs2
*Repo für das Praktikum zum Vertiefungsfach "Datenbankensysteme II" im Wintersemester 2016-17*

##Projekt Setup

### Voraussetzungen:
* Das Ganze läuft auf XAMPP. Hier runterladen: https://www.apachefriends.org/de/index.html
* Empfohlende IDE: PHPStorm. Zur Konfigurierung des XAMPP-Server und Deploy in der IDE ist der Link hier supernützlich: http://bit.ly/2esUOoI  
* NodeJS 6.7.0 (mit npm 3.10.3) hier runterladen: https://nodejs.org/download/release/v6.7.0/  
npm 3.10.8 wirft aktuell Fehler (zumindest unter MacOS), daher die ältere Version von NodeJS mit inkludiertem npm nutzen - siehe https://github.com/npm/npm/issues/13946


### Dependencies und Build:
    $ npm install  # installiert dependencies fürs Projekt)
    $ npm run gulp  # build script, das 3rd party css + js files ins Projekt kopiert


##Trouble Shooting

Falls beim Installieren der Dependencies mit npm Fehler auftreten:  

1) Sicherstellen, dass vorher erwähnte Versionen von NodeJS und npm vorhanden sind (mit ```node --version``` bzw. ```npm --version``` überprüfen)

2) Ansonsten kann das an den Zugriffsrechten für den Node-Ordners liegen - dann müssen die auf den aktuellen Nutzer geändert werden:

    $ npm config get prefix
    $sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share} # falls voriges Kommando "/usr/local" liefert
    
*zu den Berechtigungen für den Node-Ordner siehe auch: http://bit.ly/2e7gS74* 
