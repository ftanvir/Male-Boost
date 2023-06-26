window.addEventListener("DOMContentLoaded", function () {
  
    // Get the form elements
    var form = document.getElementById("form");

  //add event listener for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    calculateDoses();
  });

  //calculate doses
  function calculateDoses() {

    testosteroneBoost.textContent = "";
    
    //id ="appendcontent" make innerHTML = ""
    var appendcontent = document.getElementById("appendcontent");
    appendcontent.innerHTML = "";

    //id = "symptomaticTestosterone" is checked
    var symptomaticTestosterone = document.getElementById("symptomaticTestosterone").checked;

    

    if(isCalculatable() ===true){
        if(symptomaticTestosterone=== false) {
            testosteroneBoost.textContent = "0mg";

            var testosteroneDoseBlock = document.getElementById("appendcontent");
            var testosteroneDoseBlockP = document.createElement("p");
            testosteroneDoseBlockP.textContent = "Boost dosage is zero when patient is not symptomatic";
            testosteroneDoseBlockP.style.color = "red";
            testosteroneDoseBlock.appendChild(testosteroneDoseBlockP);

            
        }
        else {
            testosteroneBoost.textContent = calculateTestosteroneBoost();
        }
        // console.log(calculateTestosteroneBoost());
    } else{
        testosteroneBoost.textContent = "0mg";
        //add a red color paragraph to id = "testosteroneDoseBlock"


        var testosteroneDoseBlock = document.getElementById("appendcontent");
        var testosteroneDoseBlockP = document.createElement("p");
        testosteroneDoseBlockP.textContent = "Consider next full procedure round of pellets instead of a boost.";
        testosteroneDoseBlockP.style.color = "red";
        testosteroneDoseBlock.appendChild(testosteroneDoseBlockP);
        
    }
}

  //check if the last procedure date is within the last two months from today
  function isCalculatable() {

    var lastProcedureDateInput = document.getElementById("lastProcedureDate");
    var lastProcedureDate = new Date(lastProcedureDateInput.value);
    var currentDate = new Date();
    var threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    if (lastProcedureDate >= threeMonthsAgo && lastProcedureDate <= currentDate) {
        return true;
    } else {
        return false;
    }

    }

    //calculate testosterone boost
    function calculateTestosteroneBoost() {
        //check if id="symptomaticTestosterone" is checked
        var symptomaticTestosterone = document.getElementById("symptomaticTestosterone");
        if (symptomaticTestosterone.checked === true) {
            var testosteronecal = document.getElementById("testosteroneLabs").value;

            if(testosteronecal >=0 && testosteronecal<=499) {
                var val = "800mg";
                return val;
            }
            if(testosteronecal >=500 && testosteronecal<=699) {
                var val = "600mg";
                return val;
            }

            if(testosteronecal >=700 && testosteronecal<=899) {
                var val = "400mg";
                return val;
            }

            if(testosteronecal >=900 && testosteronecal<=1199) {
                var val = "200mg";
                return val;
            }
            if(testosteronecal >1200) {
                var val = "0mg";

                var testosteroneDoseBlock = document.getElementById("appendcontent");
                var testosteroneDoseBlockP = document.createElement("p");
                testosteroneDoseBlockP.textContent = "Boost dosage is zero when testosterone labs are greater than or equal to 1200";
                testosteroneDoseBlockP.style.color = "red";
                testosteroneDoseBlock.appendChild(testosteroneDoseBlockP);

                return val;
            }
        }
    }


    
    
});
