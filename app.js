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
function Store(name,min,max,avgCS) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCS = avgCS;
  this.avgCustPH = [];
  this.avgCookPH = [];
  this.cookieHourlyTotal = [];
  this.cookieHourTotal = 0;
  allStores.push(this);
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
  thEl.testContent = 'Daily Total';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
//table render
Store.prototype.render = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (var i = 0; i < openHrs.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookPH[i];
    trEl.appendChild(tdEl);
  }

  // var thEl = document.createElement('th');
  // thEl.textContent = this.avgCookPH;
  // trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

//customers per hour
Store.prototype.avgCust = function() {
  for (var i = 0; i < openHrs.length; i++) {
    this.avgCustPH.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

//cookies per hour
Store.prototype.avgCPH = function() {
  for (var i = 0; i < openHrs.length; i++) {
    this.avgCookPH.push(Math.round(this.avgCustPH[i] * this.avgCS));
  }
};



//cookies total
Store.prototype.cookieHourlyTotals = function() {
  var totalCookiesHrly = 0;
  for (var i = 0; i < openHrs.length; i++) {
    // console.log(allStores[i]
    for (var j = 0; j < allStores.length; j++) {
      var currentStoreObject = allStores[j];
      console.log('currentStoreObject', currentStoreObject[i]);


      this.cookieHourTotal = 0;
      this.cookieHourTotal += currentStoreObject.avgCookPH[j];
      ////////////////////////////////////
      totalCookiesHrly += this.cookieHourTotal;
      console.log('totalCookiesHrly', totalCookiesHrly);
    }
    return totalCookiesHrly;
    break;
  }
};

// Store.prototype.totalsMath = function() {
//   for (var i = 0; i < openHrs.length; i++) {
//     var totals2 = this.avgCookPH[i] + i;
//     this.total.push(totals2);
//   }
// };
var pike = new Store('Pike',23,65,6.3);
var seaTac = new Store('SeaTac',3,24,1.2);
var seaCenter = new Store('SeaCenter',11,38,3.7);
var capitolHill = new Store('CapitolHill',20,38,2.3);
var alki = new Store('Alki',2,16,4.6);

console.table(allStores);
function calltags() {
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
  makeHeaderRow();
  pike.render();
  seaTac.render();
  seaCenter.render();
  capitolHill.render();
  alki.render();
};
calltags();
pike.cookieHourlyTotals();
