# Kitedanmark IT-Database

For at starte det hele op kræver det følgende:

- En ".env" fil som indeholder 
```
PORT=3000

DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_DATABASE=kitedanmark
DB_PORT=3306
```
- Du opretter en database med navnet "kitedanmark", og køre SQL scriptet som kan findes [her](./sql/kitedanmark.sql)

- Åbner terminalen og skriver ``` npm i ``` 

# Start hjemmesiden

Når alting er sat op, så er ikke mere end at skrive ``` npm run dev eller node index ``` og åbne din browser på [localhost:3000](http://localhost:3000)
