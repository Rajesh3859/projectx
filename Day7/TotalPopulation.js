var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", "true");
request.send();
request.onload = function () {
  var result = JSON.parse(this.response);
  var Tpop = result.reduce((acc,element) => {
      return acc + element.population;
  },0);

  console.log(Tpop);
};
