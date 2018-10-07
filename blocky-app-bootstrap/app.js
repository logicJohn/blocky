"use strict";

var users = "https://jsonplaceholder.typicode.com/users";
var clients = [
  { clientId: "001", clientName: "American Express", balance: 5650 },
  { clientId: "002", clientName: "DummyClient2", balance: 3220 },
  { clientId: "003", clientName: "DummyClient3", balance: 3245 }
];
var consumers = [
  {
    consumerId: "001",
    firstName: "Bruce",
    lastName: "Wayne",
    balance: 100,
    favHobby: "bat watching",
    favFood: "steak",
    favStore: "BATS!",
    favShoe: "oxfords",
    favWebsite: "www.news.com"
  },
  {
    consumerId: "002",
    firstName: "Judge",
    lastName: "Harris",
    balance: 1.3,
    favHobby: "gaming",
    favFood: "pizza",
    favStore: "Steam",
    favShoe: "socks",
    favWebsite: "www.gamers.com"
  },
  {
    consumerId: "003",
    firstName: "Hanna",
    lastName: "Hacker",
    balance: 38.65,
    favHobby: "hacking",
    favFood: "doritos",
    favStore: "Hot Topic",
    favShoe: "sneakers",
    favWebsite: "www.hackers.com"
  },
  {
    consumerId: "004",
    firstName: "Lisette",
    lastName: "Anders",
    balance: 21.4,
    favHobby: "dog walking",
    favFood: "sweet roll",
    favStore: "Petco",
    favShoe: "sneakers",
    favWebsite: "www.dogs.com"
  },
  {
    consumerId: "005",
    firstName: "Geralt",
    lastName: "Rivia",
    balance: 18.63,
    favHobby: "fencing",
    favFood: "apple",
    favStore: "Patagonia",
    favShoe: "leather boots",
    favWebsite: "www.witchers.com"
  },
  {
    consumerId: "006",
    firstName: "Booker",
    lastName: "DeWitt",
    balance: 8.49,
    favHobby: "reading",
    favFood: "steak",
    favStore: "SkyMall",
    favShoe: "oxfords",
    favWebsite: "www.skyliving.com"
  },
  {
    consumerId: "007",
    firstName: "Robin",
    lastName: "Scherbatsky",
    balance: 65.12,
    favHobby: "going to the mall",
    favFood: "poutine",
    favStore: "the mall",
    favShoe: "flats",
    favWebsite: "www.news.com"
  },
  {
    consumerId: "008",
    firstName: "Zojja",
    lastName: "Day",
    balance: 32.41,
    favHobby: "dragon fighting",
    favFood: "pineapple",
    favStore: "AsuraTech",
    favShoe: "boots",
    favWebsite: "www.asuratech.com"
  },
  {
    consumerId: "009",
    firstName: "Daenerys",
    lastName: "Targaryen",
    balance: 89.32,
    favHobby: "dragon training",
    favFood: "horse heart",
    favStore: "Dragons R Us",
    favShoe: "sandals",
    favWebsite: "www.dragons.com"
  }
];
var serviceProviders = [
  { serviceId: "001", serviceName: "IBM", balance: 320400 },
  { serviceId: "002", serviceName: "Facebook", balance: 120320 }
];
var regulators = [
  {
    regulatorId: "001",
    regulatorName: "IRS",
    regulatorOrganization: "Federal"
  },
  { regulatorId: "002", regulatorName: "Watson", regulatorOrganization: "IBM" }
];

function loadClients() {
  $("#client-table-body").empty();
  clients.forEach(function(element) {
    $("#client-table-body").append(
      '<tr><th scope="row">' +
        element.clientId +
        "</th><td>" +
        element.clientName +
        "</td><td>" +
        element.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
        "</td></tr>"
    );
  });
}

function loadConsumers() {
  $("#consumer-table-body").empty();
  consumers.forEach(function(element) {
    $("#consumer-table-body").append(
      '<tr><th scope="row">' +
        element.consumerId +
        "</th><td>" +
        element.firstName +
        "</td><td>" +
        element.lastName +
        "</td><td>" +
        element.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
        "</td><td>" +
        element.favHobby +
        "</td><td>" +
        element.favFood +
        "</td><td>" +
        element.favStore +
        "</td><td>" +
        element.favShoe +
        "</td><td>" +
        element.favWebsite +
        "</td></tr>"
    );
  });
}
function loadServiceProviders() {
  $("#service-provider-table-body").empty();
  serviceProviders.forEach(function(element) {
    $("#service-provider-table-body").append(
      '<tr><th scope="row">' +
        element.serviceId +
        "</th><td>" +
        element.serviceName +
        "</td><td>" +
        element.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
        "</td></tr>"
    );
  });
}
function loadRegulators() {
  $("#regulator-table-body").empty();
  regulators.forEach(function(element) {
    $("#regulator-table-body").append(
      '<tr><th scope="row">' +
        element.regulatorId +
        "</th><td>" +
        element.regulatorName +
        "</td><td>" +
        element.regulatorOrganization +
        "</td></tr>"
    );
  });
}

function loadModalData() {
  $("#consumer-modal-table-body").empty();
  consumers.forEach(function(element) {
    if (
      element.consumerId == 1 ||
      element.consumerId == 2 ||
      element.consumerId == 4 ||
      element.consumerId == 6 ||
      element.consumerId == 7 ||
      element.consumerId == 9
    ) {
      $("#consumer-modal-table-body").append(
        '<tr><th scope="row">' +
          element.consumerId +
          "</th><td>" +
          element.favHobby +
          "</td><td>" +
          element.favFood +
          "</td><td>" +
          element.favStore +
          "</td><td>" +
          element.favShoe +
          "</td><td>" +
          element.favWebsite +
          "</td></tr>"
      );
    }
  });
}

function get(users) {
  fetch(users)
    .then(response => response.json())
    .then(json => console.log(json));
}

$(document).ready(function() {
  loadClients();
  loadConsumers();
  loadServiceProviders();
  loadRegulators();
});
