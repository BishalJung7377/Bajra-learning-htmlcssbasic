
function leapYears() {
    var input = document.getElementById("year");
    var year = parseInt(input.value);
    var output = document.getElementById("output");
    output.innerHTML = "Next 5 leap years after " + year + ": ";
    
    var count = 0;
    while (count < 5) {
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        count++;
        output.innerHTML += " " + year;
      }
      year++;
    }
  }


  