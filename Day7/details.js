var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", "true");
request.send();
request.onload = function () {
  var result = JSON.parse(this.response);
    result.forEach(element => {
      console.log(element.name ,element.capital ,element.flag)
    
  });

};
