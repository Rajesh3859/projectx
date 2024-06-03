 
class Circle {
    constructor (radius,color){

    this.radius = 1.0;
    this.color = "Red";
  }
  getRadius = function () {
    return this.radius;
  };
  setRadius = function (radius) {
    this.radius = radius;
  };
  getColor = function () {
    return this.color;
  };
  setColor = function (color) {
    this.color = color;
  };
  toString = function () {
    return this.radius + " " + this.color;
  };
  getArea = function () {
    return 2 * Math.PI * this.radius;
  };
  getCircumference = function () {
    return 2 * this.radius;
  };
}
var c1 = new Circle();
console.log( c1.toString());
var c2 = new Circle(3.5);
console.log( c2.toString());
var c3 = new Circle(2.2, "Yellow");
console.log(c3.getRadius());
c3.setRadius(3.3);
console.log( c3.getRadius());
console.log( c3.getColor());
c3.setColor("Blue");
console.log( c3.getColor());
console.log(c3.toString());
console.log( c3.getArea());
console.log( c3.getCircumference());
