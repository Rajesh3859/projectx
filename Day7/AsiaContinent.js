var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", "true");
request.send();
request.onload = function () {
    var result = JSON.parse(this.response);
    var asia = result.filter((element) => {
        if (element.region === "Asia") {
            return element.name;
        }
    });

    console.log(asia)
};