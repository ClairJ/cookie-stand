'use strict';
//var stores = [];
var openHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// ==================================================================
//var figureList = document.getElementById('figure_list');
//var figureForm = document.getElementById('firgure_Form');
//var clearFigureList = document.getElementById('clear_figure_list');
// ==================================================================
var allStores = [];
var storeTable = document.getElementById('stores');
var cookieDailyTotal = [];
var totalSums = 0;

function Store(name,min,max,avgCS) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCS = avgCS;
  this.cookieDayTotal = 0;
  this.avgCookPH = [];
  allStores.push(this);
  console.log(this.avgCookPH);
}


//customers per hour
Store.prototype.avgCust = function() {
  for (var i = 0; i < openHrs.length; i++) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};
//cookies per hour
Store.prototype.avgCPH = function() {
  for (var i = 0; i < openHrs.length; i++) {
    var custs = this.avgCust();
    this.avgCookPH.push(Math.round(custs * this.avgCS));
  }
};
//testing
Store.prototype.dailyTrans = function() {
  for (var i = 0; i < this.avgCookPH.length; i++) {
    this.cookieDayTotal += this.avgCookPH[i];
    console.log(this.cookieDaytotal);
  }
};
//cookies total
// Store.prototype.cookieHourlyTotals = function() {
//   for (var i = 0; i < openHrs.length; i++) {
//     var totalCookiesHrly = 0;
//     for (var j = 0; j < allStores.length; j++) {
//       var currentStoreObject = allStores[j];
//       // console.log('currentStoreObject', currentStoreObject[i]);
//       this.cookieHourTotal = 0;
//       this.cookieHourTotal += currentStoreObject.avgCookPH[i];
//       ////////////////////////////////////
//       totalCookiesHrly += this.cookieHourTotal;
//     }
//     cookieHourlyTotal.push(totalCookiesHrly);
//     console.log('totalCookiesHrly', cookieHourlyTotal);
//   }
// };

//table render
Store.prototype.render = function() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var i = 0; i < this.avgCookPH.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookPH[i];
    trEl.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = this.cookieDayTotal;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

new Store('Pike',23,65,6.3);
new Store('SeaTac',3,24,1.2);
new Store('SeaCenter',11,38,3.7);
new Store('CapitolHill',20,38,2.3);
new Store('Alki',2,16,4.6);
console.log(allStores);
function hourlySum() {
  for (var i = 0; i < openHrs.length; i++) {
    var totalCounter = 0;
    for (var j = 0; j < allStores.length; j++) {
      totalCounter += allStores[j].avgCookPH[i];
    }
    cookieDailyTotal.push(totalCounter);
  }
}
function makeTotals() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < openHrs.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = cookieDailyTotal[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = totalSums;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  for (var i = 0; i < openHrs.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = openHrs[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
makeHeaderRow();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].avgCPH();
  allStores[i].dailyTrans();
  allStores[i].render();
}
hourlySum();

for (var j = 0; j < cookieDailyTotal.length; j++) {
  totalSums += cookieDailyTotal[j];
}

makeTotals();
console.table(allStores);
console.log(cookieDailyTotal);
