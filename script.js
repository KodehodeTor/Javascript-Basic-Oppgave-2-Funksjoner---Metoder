/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

//Satt opp en if/else for pin point

// if (tall / 2 === 0) {
//   console.log(tall + " er partall");
// } else {
//   console.log(tall + " er oddetall");
// }

function parTallellerIkke(x) {
  if (x % 2 === 0) {
    return `Dette er et partall`;
  } else {
    return `Dette er ikke et partall`;
  }
}

console.log(parTallellerIkke(20));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// let text = "Dette er kult";
// let fulltext = text + "!";
// console.log(fulltext.toUpperCase());

function fullText(text) {
  let fullText = text + "!";
  return fullText.toUpperCase();
}

console.log(fullText("Dette er kult"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/
// Dette funker ikke "-" er minus !
// let tidsreferat = (time, name) => {
//   if (time >= 0 - 5) {
//     return `God natt ${name}`;
//   } else if (time >= 6 - 10) {
//     return `God morgen ${name}`;
//   }
// };

//console.log(tidsreferat(7, "Tor"));

let tidsreferat = (time, name) => {
  if (time >= 0 && time <= 5) {
    return `God natt ${name}`;
  } else if (time >= 6 && time <= 11) {
    return `God morgen ${name}`;
  } else if (time >= 12 && time <= 17) {
    return `God dag ${name}`;
  } else if (time >= 18 && time <= 23) {
    return `God kveld ${name}`;
  } else {
    return "Ugyldig tid";
  }
};

console.log(tidsreferat(11, "Tor"));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

// arrayOne.pop();
// arrayOne.shift();

// console.log(arrayOne);

const arrayOne = ["Rød", "Grønn", "Blå", "Gul"];

function arrayOneFixed(arrayOne) {
  arrayOne.pop();
  arrayOne.shift();
  return arrayOne;
}

console.log(arrayOneFixed(arrayOne));

const arrayTwo = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

function arrayTwoFixed(arrayTwo) {
  arrayTwo.pop();
  arrayTwo.shift();
  return arrayTwo;
}

console.log(arrayTwoFixed(arrayTwo));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
// "  Javascript er vanskelig   "
// text.trim();
// text.replace("vanskelig", "gøy");

//console.log(exampleOne.replace("vanskelig", "gøy"));
//Fikk svaret fra oppgave 6 :D ("let result" gjør det jo mulig)

const exampleOne = "  Javascript er vanskelig   ";
const exampleTwo = " Det er vanskelig å bruke metoder ";
const exampleThree = "   vanskelig        ";

function exampleOneFixed(exampleOne) {
  let result = exampleOne.replace("vanskelig", "gøy").trim();
  return result;
}

console.log(exampleOneFixed(exampleOne));

function exampleTwoFixed(exampleTwo) {
  let result = exampleTwo.replace("vanskelig", "gøy");
  return result;
}

console.log(exampleTwoFixed(exampleTwo));

function exampleThreeFixed(exampleThree) {
  let result = exampleThree.replace("vanskelig", "gøy").trim();
  return result;
}

console.log(exampleThreeFixed(exampleThree));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// items.shift()
// items.splice(3, 1, "Linjal")
// items.splice(1, 2 "Markeringspenn")
// items.join(" ")

function itemsToBeFixed(items) {
  items.shift();
  items.splice(2, 1, "Linjal");
  items.splice(0, 2, "Markeringspenn");

  let result = items.join(" | ");
  return result;
}

console.log(itemsToBeFixed(items));

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// no thank you :D

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// forstod så vidt opp. 1-6 så dette sier jeg nei takk til i skrivende stund:)
