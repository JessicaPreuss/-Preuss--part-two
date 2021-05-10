var petName = ""; 
var energy = 0;
var happiness = 0;
          (function petNameFunction() {
            var txt;
            petName = prompt("Please enter your pet's name:", "");
            if (!petName) {
              txt = "User cancelled the prompt.";
            } 
            document.getElementById("demo").innerHTML = txt;
          }) ();
          
          for (var i = 0; i < 6; i++) {
            (function petTrackFunction() {
            var text = "";
            var actions = ["feed", "pet", "walk"];
            var userInput = prompt("Please enter one of the three actions - feed, pet, or walk:", "").toLowerCase();
            if (!userInput) {
              text = "User cancelled the prompt.";
            } else if (userInput == actions[0]) {
              energy = energy + 2;
            } else if (userInput == actions[1]) {
              happiness++;
            } else if (userInput == actions[2]) {
                if (energy == 0) {
                    alert("Not enough energy to enjoy a walk.");
                } else {
                    happiness = happiness +2;
                    energy--;
                }
            } 
            if (i == 5) {
              return console.log(petName, "has", happiness, "happiness and", energy, "energy.");
            }
            document.getElementById("demo").innerHTML = text;
          }) ();
          
          }      


