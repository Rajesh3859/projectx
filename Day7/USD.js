var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", "true");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  var cur = [];
  for (i = 0; i < result.length; i++) {
    if (result[i].currencies[0].code === "USD") {
      console.log("name is:", result[i].name, " ", result[i].currencies[0].code);
    } else {
        console.log("error")
    }
  }
}
