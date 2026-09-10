var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
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
let tickets = [];
let nextTicketId = 1;




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
return "Aucun trajet trouvé avec cet ID.";
}else if(foundTrip.availableSeats > 0){
let newTicket = {id: nextTicketId, passengerName: passengerName, tripId: tripId, seatNumber: 51 - foundTrip.availableSeats, price: foundTrip.price};
tickets.push(newTicket);
foundTrip.availableSeats--;
nextTicketId++;
return "Ticket acheté avec succès.";
}else{
return "Aucune place disponible pour ce trajet.";
}
}


// "3. Afficher les tickets"
function displayTickets(tickets){
if(tickets.length === 0){
console.log("Aucun ticket acheté.");
}
else {   
for(let i = 0; i < tickets.length; i++){
console.log("Ticket #" + tickets[i].id);
console.log("Passager :", tickets[i].passengerName);
console.log("Trajet :", tickets[i].tripId);
console.log("Place :", tickets[i].seatNumber);
console.log("Prix :", tickets[i].price, "DH");
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
return "Aucun ticket trouvé avec cet ID.";
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
function filtrerTrajets(trips, nameDeparture){
let foundTrips = [];
for(let i = 0 ; i < trips.length ; i++){
if(trips[i].departure === nameDeparture){
foundTrips.push(trips[i]);
}
}
return foundTrips;
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
console.log(buyTicket(trips, tickets, passengerName, tripId));
break;

case 3 :
displayTickets(tickets);
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
console.log("Ticket #" + foundTickets[i].id);
console.log("Passager :", foundTickets[i].passengerName);
console.log("Trajet :", foundTickets[i].tripId);
console.log("Place :", foundTickets[i].seatNumber);
console.log("Prix :", foundTickets[i].price, "DH");
}
}
break;


case 6:
let departureCity = prompt("Ville de départ : ");
let foundTrips = filtrerTrajets(trips, departureCity)
if(foundTrips.length === 0){
console.log("Aucun trajet trouvé depuis cette ville.");
}else{
for(let i = 0 ; i < foundTrips.length ; i++){
console.log(foundTrips[i].departure,"->",foundTrips[i].destination);
}
}
break;

default : console.log("Choix invalide. Veuillez réessayer.");
break;
}
}
}







mainMenu();


