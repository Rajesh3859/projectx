var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", "true");
request.send();
request.onload = function () {
  var result = JSON.parse(this.response);
  var pop = result.filter((element) => {
      return element.population<200000;
    
  });

  console.log(pop);
};
