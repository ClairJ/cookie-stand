'use strict';
Store.all = [];
Store.openHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// ==================================================================
//var figureList = document.getElementById('figure_list');
//var figureForm = document.getElementById('firgure_Form');
//var clearFigureList = document.getElementById('clear_figure_list');
// ==================================================================
var allStores = [];
Store.storeTable = document.getElementById('store-table');
Store.theForm = document.getElementById('add-location');
var clearFigureList = document.getElementById('clear-figure-list');
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
  for (var i = 0; i < Store.openHrs.length; i++) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};
//cookies per hour
Store.prototype.avgCPH = function() {
  for (var i = 0; i < Store.openHrs.length; i++) {
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
//table render

Store.prototype.render = function() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var j = 0; j < this.avgCookPH.length; j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookPH[j];
    trEl.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = this.cookieDayTotal;
  trEl.appendChild(thEl);

  Store.storeTable.appendChild(trEl);
};
Store.newElement = function(type, content, parent){
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
};
new Store('Pike',23,65,6.3);
new Store('SeaTac',3,24,1.2);
new Store('SeaCenter',11,38,3.7);
new Store('CapitolHill',20,38,2.3);
new Store('Alki',2,16,4.6);
console.log(allStores);
Store.hourlySum = function() {
  for (var i = 0; i < Store.openHrs.length; i++) {
    var totalCounter = 0;
    for (var j = 0; j < allStores.length; j++) {
      totalCounter += allStores[j].avgCookPH[i];
    }
    cookieDailyTotal.push(totalCounter);
  }
};
function makeTotals() {
  var trEl = document.createElement('tr');

  Store.newElement('th', 'Hourly Total for All Stores', trEl);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < Store.openHrs.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < Store.all.length; j++) {
      hourlyTotal = cookieDailyTotal[j];
      totalOfTotals = cookieDailyTotal[j];
    }
    Store.newElement('th', hourlyTotal, trEl);
  }
  Store.newElement('th', totalOfTotals, trEl);
  Store.storeTable.appendChild(trEl);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  for (var i = 0; i < Store.openHrs.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = Store.openHrs[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  Store.storeTable.appendChild(trEl);
}
// makeHeaderRow();

// for (var i = 0; i < allStores.length; i++) {
//   allStores[i].avgCPH();
//   allStores[i].dailyTrans();
//   allStores[i].render();
// }
Store.hourlySum();

for (var j = 0; j < cookieDailyTotal.length; j++) {
  totalSums += cookieDailyTotal[j];
}

// makeTotals();

// function renderAllStores() {
//   for (var i = 0; i < allStores.length; i++) {
//     Store.storeTable.appendChild(allStores[i].render());
//   }
// }
Store.renderTable = function() {
  Store.storeTable.innerHTML = '';
  makeHeaderRow();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].avgCPH();
    allStores[i].dailyTrans();
    allStores[i].render();
  }
  makeTotals();
};

function handleFigureSubmit (event) {
  event.preventDefault();
  // keep an eye on double variables with name?
  var name = event.target.locName.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  if (!event.target.locName.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Fields cannot be blank');
  }
  for (var i = 0; i < Store.all.length; i++) {
    if (name === Store.all[i].name) {
      Store.all[i].minCust = min;
      Store.all[i].maxCust = max;
      Store.all[i].avgCS = avg;

      Store.all[i].avgCust();
      Store.all[i].cookieDaytotal = 0;
      Store.all[i].avgCookPH = [];

      Store.all[i].avgCPH();
      clearform();
      Store.renderTable();
      return;
    }
  }

  new Store(name, min, max, avg);
  function clearform() {
    event.target.locName.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;
    Store.renderTable();
  }
}

Store.theForm.addEventListener('submit', handleFigureSubmit);

clearFigureList.addEventListener('click', function() {
  Store.storeTable.innerHTML = '';
  console.log('Cleared New Figures!');
});

Store.renderTable();


console.table(allStores);
console.log(cookieDailyTotal);
