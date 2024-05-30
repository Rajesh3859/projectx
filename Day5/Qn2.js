  var myResume={
    "basics":{
        "Name": "M.rajesh",
        "Email": "rajeshvjm10@gmail.com",
        "Phone No": "6383163859",
        "degree": "B.E",
        "blood": "B+",
        "Address": {
            "add1": "20,Keeraikollai street,railway gate,south side,nagapattinam",
            "add2": "13/4, merumal vadaku vethi,nagapattinam"
        },
        "Pincode": 611001
    },
    "education":{
        "sslc": "csi higher sec school",
        "diploma": "sir issac newton polytechnic college",
        "instutsion": "egs pillay engineering college"
    },
    "skills":[
        "web developer","git and github","sql","javascript"
    ],
    "interest":[
        "football","ea sports","books reading"
    ]

}

for (var x = 0; x < myResume.length; x++){
    var myResume = (myResume[x])
}
console.log(myResume.basics)

myResume.forEach( function (obj) {
  console.log(obj);
});

for (var key in myResume.basics) {
  console.log(key)
};

for (let x of myResume) {
  console.log(x);
}
 
