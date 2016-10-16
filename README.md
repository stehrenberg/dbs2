# dbs2
*Repo für das Praktikum zum Vertiefungsfach "Datenbankensysteme II" im Wintersemester 2016-17*

## Projekt Setup

```$ npm install  # installiert bootstrap, handlebars, grunt etc)```
==> falls bei dem Schritt Fehler auftreten, macht vermutlich die Berechtigung des Node-Ordners Probleme - 
dann muss die auf den aktuellen Nutzer geändert werden:
    $ npm config get prefix
    $sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share} # falls voriges Kommando "/usr/local" liefert
{ zu den Berechtigungen für den Node-Ordner siehe auch (hier)[http://bit.ly/2e7gS74]
```$ cd node_modules/bootstrap && npm install```
==> falls Fehler beim vorigen Schritt: in Basisdir dbs2/ hoch und npm updaten: ```$sudo npm -g install npm```
