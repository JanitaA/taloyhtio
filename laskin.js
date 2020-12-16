
(function() {
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
    const squareFeetElement = document.getElementById('squareFeetElement');
  
    squareFeetElement.innerHTML = numberOfSquareFeet;
  }


 
  document.getElementById("squareFeetElement").addEventListener( 'change', updateValue); 

    
    function updateValue(e){
      var numberOfSquareFeet = e.target.value;
      var numberOfGallons = convertSquareFeetToGallons(numberOfSquareFeet);
    }

  

  
    updateNumberOfGallonsUI(numberOfGallons);
    updateSquareFeetUI(numberOfSquareFeet);
  });



    var apartments = React.createElement('section', {'id':'apartments'},
    React.createElement('h2', null, 'Apartments',
    
    React.createElement("ul",null,
    React.createElement("li", null, "2h + K" ),
    React.createElement("li", null, "1h + kk"),
    React.createElement("li", null, "3h + kk")
    )
    )
    );
    
     ReactDOM.render(apartments, document.getElementById('react-root'));




