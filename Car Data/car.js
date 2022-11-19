Car.js
$(function () {
$form = $('form');
$form.on('submit', function (e) {
e.preventDefault();
var manufacturer = $('#manufacturer').val();
var model = $('#model').val();
var year = $('#year').val();
year = Number(year)
var fuel = $('#fuel').val();
var clr = $('#color').val();
var seating = $('#seating').val();
var cubic = $('#cubic').val();
cubic = Number(cubic)
const car = {
cManufacturer: manufacturer,
cModel: model,
cYear: year,
cFuel: fuel,
cClr: clr,
cSeating: seating,
cCubic: cubic
};
var jcar = JSON.stringify(car);
console.log('JSON Object is ', jcar);
var car2 = JSON.parse(jcar);
console.log('JavaScript Object is ', car2);
})
})