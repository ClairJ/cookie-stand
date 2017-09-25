'use strict';
var shops = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var days = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
var openHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var minCustomer = ['23','3','11','20','3'];
var maxCustomer = ['65','24','38','38','16'];
var avgCookieS = ['6.3','1.2','3.7','2.3','4.6'];


//customers per hour?

//var customers = 0;
//shops objects
var pike = {
  location: shops[0],
  minC: 23,
  maxC: 65,
  avgCS: 6.3,
  hourlyC: function() {
    return (Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC);
  },
  cookiePH: function() {
    return (Math.floor(this.hourlyC() * this.avgCS));
  }
};

var seaTac = {
  location: shops[1],
  minC: 3,
  maxC: 24,
  avgCS: 1.2,
  hourlyC: function() {
    return (Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC);
  },
  cookiePH: function() {
    return (Math.floor(this.hourlyC() * this.avgCS));
  }
};

var seaCenter = {
  location: shops[2],
  minC: 11,
  maxC: 38,
  avgCS: 3.7,
  hourlyC: function() {
    return (Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC);
  },
  cookiePH: function() {
    return (Math.floor(this.hourlyC() * this.avgCS));
  }
};

var capitolHill = {
  location: shops[3],
  minC: 20,
  maxC: 38,
  avgCS: 2.3,
  hourlyC: function() {
    return (Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC);
  },
  cookiePH: function() {
    return (Math.floor(this.hourlyC() * this.avgCS));
  }
};

var alki = {
  location: shops[4],
  minC: 2,
  maxC: 16,
  avgCS: 4.6,
  hourlyC: function() {
    return (Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC);
  },
  cookiePH: function() {
    return (Math.floor(this.hourlyC() * this.avgCS));
  }
};

var cookiesSPH = [pike.cookiePH(), seaTac.cookiePH(), seaCenter.cookiePH(), capitolHill.cookiePH(), alki.cookiePH()];
//Customer per house and cookie per hour tests
pike.hourlyC();
console.log('pike hourlyC is ' + pike.hourlyC() + ' Pike cookiePH is ' + cookiesSPH[0]);
seaTac.hourlyC();
console.log('seaTac hourlyC is ' + seaTac.hourlyC() + ' SeaTac cookiePH is ' + cookiesSPH[1]);
seaCenter.hourlyC();
console.log('seaCenter hourlyC is ' + seaCenter.hourlyC() + ' SeaCenter cookiePH is ' + cookiesSPH[2]);
capitolHill.hourlyC();
console.log('CapitolHill hourlyC is ' + capitolHill.hourlyC() + ' CapitolHill cookiePH is ' + cookiesSPH[3]);
alki.hourlyC();
console.log('Alki hourlyC is ' + alki.hourlyC() + ' Alki cookiePH is ' + cookiesSPH[4]);
//test to see if it works
console.log(pike);
console.log(seaTac);
console.log(seaCenter);
console.log(capitolHill);
console.log(alki);

console.log('Cookies sold per hour ' + cookiesSPH);
