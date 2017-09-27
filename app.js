'use strict';
//var stores = [];
var openHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var allStores = [];
var storeTable = document.getElementById('stores');
function Store(name,min,max,avgCS) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCS = avgCS;
  this.name = name;
  this.avgCustPH = [];
  this.avgCookPH = [];
  allStores.push(this);
}


// store.prototyp.render = function() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = openHrs;
// }



Store.prototype.avgCust = function() {
  for (var i = 0; i < openHrs.length; i++) {
    this.avgCustPH.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
};

//stores hourly cookies sold
Store.prototype.avgCPH = function() {
  for (var i = 0; i < openHrs.length; i++) {
    this.avgCookPH.push(Math.round(this.avgCustPH[i] * this.avgCS));
  }
};

// Store.prototype.totalsMath = function() {
//   for (var i = 0; i < openHrs.length; i++) {
//     var totals2 = this.avgCookPH[i] + i;
//     this.total.push(totals2);
//   }
// };
var pike = new Store('Pike','23','65','6.3');
var seaTac = new Store('SeaTac','3','24','1.2');
var seaCenter = new Store('SeaCenter','11','38','3.7');
var capitolHill = new Store('CapitolHill','20','38','2.3');
var alki = new Store('Alki','2','16','4.6');

console.table(allStores);

pike.avgCust();
pike.avgCPH();
seaTac.avgCust();
seaTac.avgCPH();
seaCenter.avgCust();
seaCenter.avgCPH();
capitolHill.avgCust();
capitolHill.avgCPH();
alki.avgCust();
alki.avgCPH();
