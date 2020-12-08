(function() {
    // Convert sq mt to liters of paint
    var litersOfPaint = 0;
    var squareMeter = 0;
    // Paste source here
    var conversionRate = 12;
  
    function convertSquareMeterToLiters(squareMeter) {
      // 12 sq mt to 1 liter of paint
      litersOfPaint = squareMeter / conversionRate;
      // Round number up to nearest whole number
      litersOfPaint = Math.ceil(litersOfPaint);
  
      return litersOfPaint;
    }
  
    // Find and update number of gallons element with returned number
    function updateNumberOfLitersUI(numberOfLiters) {
      // Find number of liters element
      var numberOfLitersElement = document.querySelector("[data-ui='numberOfLiters']");
      // Updating HTML with number of liters
      numberOfLitersElement.innerHTML = numberOfLiters;
    }
  
    // Find and update square feet element with number from input
    function updateSquareMeterUI(numberOfSquareMeter) {
      // Find square meter element
      var squareMeterElement = document.querySelector("[data-ui='numberOfSquareMeter']");
      // Updating square feet number element with actual number from input
      squareMeterElement.innerHTML = numberOfSquareMeter;
    }
  
    // Find square feet number
    var squareMeterElement = document.querySelector("[data-ui='squareMeterNumber']");
   
    // Listen for input change
    squareMeterElement.addEventListener("change", function(e) {
      // Grabbing number of square feet from event object
      var numberOfSquareMeter = e.target.value;
      // Converting square feet to number of gallons
      var numberOfLiters = convertSquareMeterToLiters(numberOfSquareMeter);
  
      // UPdating UI
      updateNumberOfLitersUI(numberOfLiters);
      updateSquareMeterUI(numberOfSquareMeter);
    });
  
  })();