var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 47
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 49
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 49
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 49
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [
    { id: 1, passengerName: "Zakaria", tripId: 1, seatNumber: 1, price: 25 },
    { id: 2, passengerName: "Adil", tripId: 1, seatNumber: 2, price: 25 },
    { id: 3, passengerName: "Aya", tripId: 2, seatNumber: 1, price: 90 },
    { id: 4, passengerName: "Omar", tripId: 3, seatNumber: 1, price: 140 },
    { id: 5, passengerName: "Yassine", tripId: 4, seatNumber: 1, price: 65 },
    { id: 6, passengerName: "Sara", tripId: 1, seatNumber: 3, price: 25 }
];
 
let nextTicketId = 7;




// 1. Afficher les trajets
function displayTrips(arr){
console.log("=== TRAJETS DISPONIBLES ===");
for(let i = 0 ; i < arr.length ; i++){
console.log("#" + arr[i].id, arr[i].departure, "→", arr[i].destination);
console.log("Départ :",arr[i].departureTime);
console.log("Arrivée :",arr[i].arrivalTime);
console.log("Prix :",arr[i].price,"DH");
console.log("Places disponibles :",arr[i].availableSeats);
}
}

// display
function displayoneticket(ticket, arr){
let foundTrip = null;
for(let i = 0 ; i < arr.length ; i++){
if(arr[i].id === ticket.tripId){
foundTrip = arr[i];
break;
}
}
console.log("Ticket #" + ticket.id);
console.log("Passager :", ticket.passengerName);
console.log("Trajet :", foundTrip.departure, "→", foundTrip.destination);
console.log("Place :", ticket.seatNumber);
console.log("Prix :", ticket.price, "DH");
}

// 2. Acheter un ticket
function buyTicket(arr, tickets, passengerName, tripId){
let foundTrip = null;
for(let i = 0; i < arr.length; i++){
if(arr[i].id === tripId){
foundTrip = arr[i];
break;
}
}
if(foundTrip === null){
return "Trajet introuvable.";
}else if(foundTrip.availableSeats > 0){
    let availableSeat = null;
    for(let i = 1; i <= 50; i++){
    let seatUsed = false;
    for(let j = 0; j < tickets.length; j++){
    if(tickets[j].tripId === foundTrip.id && tickets[j].seatNumber === i){

    seatUsed = true;
    break;
    }
    }
    if(seatUsed === false){
    availableSeat = i;
    break;
    }
    }
let newTicket = {id: nextTicketId, passengerName: passengerName, tripId: tripId, seatNumber: availableSeat, price: foundTrip.price};
tickets.push(newTicket);
foundTrip.availableSeats--;
nextTicketId++;
return "Ticket acheté avec succès.";
}else{
return "Train complet.";
}
}


// 3. Afficher les tickets
function displayTickets(tickets, arr){
if(tickets.length === 0){
console.log("Aucun ticket enregistré.");
}else {   
for(let i = 0; i < tickets.length; i++){
displayoneticket(tickets[i], arr);
}
}
}



// 4. Annuler un ticket
function AnnuleTicket(arr, tickets, ticketId){
let foundTicket = null;
let ticketIndex = null;
for(let i = 0; i < tickets.length ; i++){
if(tickets[i].id === ticketId){
foundTicket = tickets[i];
ticketIndex = i;
break;
}
}
if(foundTicket === null){
return "Ticket introuvable.";
}else { 
for(let j = 0; j < arr.length; j++){
if(arr[j].id === foundTicket.tripId){
arr[j].availableSeats++;
break;
}
}
tickets.splice(ticketIndex, 1);
return "Ticket annulé avec succès.";
}
}


// 5. Rechercher un ticket
function searchTicketByName(tickets, passengerName){
let foundTicket = [];
for(let i = 0; i < tickets.length; i++){
if(tickets[i].passengerName === passengerName){
foundTicket.push(tickets[i]);
}
}
return foundTicket;
}


// 6. Filtrer les trajets
function filtrerTrajets(arr, departureCity){
let foundTrips = [];
for(let i = 0 ; i < arr.length ; i++){
if(arr[i].departure === departureCity){
foundTrips.push(arr[i]);
}
}
return foundTrips;
}


// 7. Trier les trajets
function sortTripsByPrice(arr){
let sortedtrips = [...arr];
for(let i = 0 ; i < arr.length ; i++){
for(let j = 0 ; j < arr.length -1 -i ; j++){
if (sortedtrips[j].price > sortedtrips[j + 1].price){
let temp = sortedtrips[j];
sortedtrips[j] = sortedtrips[j + 1];
sortedtrips[j +1] = temp;
}
}
}
return sortedtrips;
}


// display case 6 - 7
function displayTripSummary(arr){
for(let i = 0 ; i < arr.length ; i++){
console.log(arr[i].departure,"->",arr[i].destination," :",arr[i].price,"DH");
}
}


//totalticket
function totalticket(arr){
let totaltecket = arr.length;
return totaltecket;
}


// total price
function totalRevenue(arr){
let totalprix = 0;
for(let i = 0; i < arr.length; i++){
totalprix += arr[i].price;
}
return totalprix;
}


// Trajet le plus vendu
function mostSoldTrip(trips, tickets){
if(tickets.length === 0){
return "Aucun ticket vendu.";
}
let counts = [];
for(let i = 0; i < trips.length; i++){
let count = 0;
for(let j = 0; j < tickets.length; j++){
if(tickets[j].tripId === trips[i].id){
count++;
}
}
counts.push(count);
}
let indexmax = 0;
let max = counts[0];
for(let i = 1; i < counts.length; i++){
if(max < counts[i]){
max = counts[i];
indexmax = i;
}
}
return trips[indexmax].departure + " -> " + trips[indexmax].destination + " : " + max + " tickets vendus";
}

// Menu
function displayMenu(){
console.log("=================================");
console.log("RAILWAY MANAGER");
console.log("=================================");
console.log("1. Afficher les trajets");
console.log("2. Acheter un ticket");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("8. Statistiques");
console.log("0. Quitter");
}


function mainMenu(){

let choice = null;
while(choice !== 0){

displayMenu();

choice = Number(prompt("Votre choix : "));

switch (choice){
case 0 :
break;

case 1 :
displayTrips(trips);
break;


case 2:
let passengerName = prompt("Nom du passager : ");
let tripId = Number(prompt("ID du trajet : "));
let result = buyTicket(trips, tickets, passengerName, tripId);
console.log(result);
if(result === "Ticket acheté avec succès."){
displayoneticket(tickets[tickets.length - 1], trips);
}
break;


case 3 :
displayTickets(tickets, trips);
break;

case 4:
let ticketId = Number(prompt("ID du ticket à annuler : "));
console.log(AnnuleTicket(trips, tickets, ticketId));
break;

case 5:
let searchName = prompt("Nom du passager : ");
let foundTickets = searchTicketByName(tickets, searchName);
if(foundTickets.length === 0){
console.log("Aucun ticket trouvé pour ce passager.");
}else{
for(let i = 0 ; i < foundTickets.length ; i++){
displayoneticket(foundTickets[i], trips);
}
}
break;

case 6:
let departureCity = prompt("Ville de départ : ");
let foundTrips = filtrerTrajets(trips, departureCity)
if(foundTrips.length === 0){
console.log("Aucun trajet trouvé depuis cette ville.");
}else{
displayTripSummary(foundTrips)
}
break;

case 7:
let sortedTrips = sortTripsByPrice(trips);
displayTripSummary(sortedTrips)
break;

case 8:
console.log("Nombre total de tickets :", totalticket(tickets));
console.log("Chiffre d'affaires total :", totalRevenue(tickets), "DH");
console.log(mostSoldTrip(trips, tickets));
break;


default : console.log("Choix invalide. Veuillez réessayer.");
break;
}}}



mainMenu();



