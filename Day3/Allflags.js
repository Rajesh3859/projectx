var url = "https://restcountries.com/v2/all";
var request = new XMLHttpRequest();

request.open("GET",url);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}