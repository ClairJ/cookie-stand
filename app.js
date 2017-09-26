'use strict';
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var openHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var hourlyCookiesArr = [];
var stores = [];
var totals = [];

function Store(name,min,max,avgCS) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCS = avgCS;
  this.name = name;
  this.avgCust = function() {
    var avgCustomer = Math.round(Math.random() * (this.maxCust - this.minCust + 1) - this.minCust);
    return avgCustomer;
  };
  this.hourlySales = function() {
    for (var i = 0; i < openHrs.length; i++) {
      var cookiesSold = Math.round(this.avgCust() * this.avgCS);
      return cookiesSold;
      totals[i] += cookiesSold;
    }
  };
  stores.push(this);
}


new Store('pike','23','65','6.3');
