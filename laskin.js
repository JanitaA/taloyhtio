(function {
var gallonsOfPaint = 0;
  var squareFeet = 0;
  var conversionRate = 350;

  function convertSquareFeetToGallons(squareFeet) {
    gallonsOfPaint = squareFeet / conversionRate;
    gallonsOfPaint = Math.ceil(gallonsOfPaint);

    return gallonsOfPaint;
  }

  function updateNumberOfGallonsUI(numberOfGallons) {
    var numberOfGallonsElement = document.querySelector("[data-ui='numberOfGallons']");
    numberOfGallonsElement.innerHTML = numberOfGallons;
  }

  function updateSquareFeetUI(numberOfSquareFeet) {
    var squareFeetElement = document.querySelector("[data-ui='numberOfSquareFeet']");
    squareFeetElement.innerHTML = numberOfSquareFeet;
  }

  var squareFeetElement = document.querySelector("[data-ui='squareFeetNumber']");
 
  squareFeetElement.addEventListener("change", function(e) {
    var numberOfSquareFeet = e.target.value;
    var numberOfGallons = convertSquareFeetToGallons(numberOfSquareFeet);

    updateNumberOfGallonsUI(numberOfGallons);
    updateSquareFeetUI(numberOfSquareFeet);
  });

});
