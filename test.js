function cookieHourlyTotals() {
  for (var i = 0; i < openHrs.length; i++) {
    var hourlyTotal = 0;
    var currentStore = allStores[i];

    for (var j = 0; j < allStores.length; j++) {
      totalTotal += currentStore.avgCookPH[j];
    }
    totalTotal += hourlyTotal;
    console.log(currentStore, currentStore);
  }
};
