  var myResume={
    "basics":{[
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
  ]},
    "educations":{[
        "sslc": "csi higher sec school",
        "diploma": "sir issac newton polytechnic college",
        "instutsion": "egs pillay engineering college"
    ]},
    "skills":[
        "web developer","git and github","sql","javascript"
    ],
    "interests":[
        "football","ea sports","books reading"
    ]

}

for (var x = 0; x < myResume.length; x++){
    var resume = (myResume[x])
}
console.log(resume.basics)
console.log(resume.educations)
console.log(resume.skills)
console.log(resume.interests)

myResume.forEach( function (obj) {
  console.log(obj.basics);
});

for (var key in myResume.basics) {
  console.log(key)
};
let a = "";
for (let x of myResume[key].basics.Name) {
  a+=x;
}
 console.log(x);
