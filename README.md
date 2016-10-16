#dbs2
*Repo für das Praktikum zum Vertiefungsfach "Datenbankensysteme II" im Wintersemester 2016-17*

##Projekt Setup

NodeJS 6.7.0 (mit npm 3.10.3) hier runterladen: https://nodejs.org/download/release/v6.7.0/  
npm 3.10.8 wirft aktuell Fehler, daher die ältere Version von NodeJS mit inkludiertem npm nutzen - siehe https://github.com/npm/npm/issues/13946

```$ npm install  # installiert bootstrap, handlebars, grunt etc)```

==> falls bei dem Schritt Fehler auftreten, macht vermutlich die Berechtigung des Node-Ordners Probleme - 
dann muss die auf den aktuellen Nutzer geändert werden:

    $ npm config get prefix
    $sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share} # falls voriges Kommando "/usr/local" liefert
    
*zu den Berechtigungen für den Node-Ordner siehe auch: http://bit.ly/2e7gS74* 

```$ cd node_modules/bootstrap && npm install```

==> falls Fehler beim vorigen Schritt: in Basisdir dbs2/ hoch und npm updaten: 
```$sudo npm -g install npm```
