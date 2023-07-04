function removeSelectedAnimals() {
    var animalList = document.getElementById("animal-list");
    var selectionList = document.getElementById("animals-to-remove");
    var selectedOptions = Array.from(selectionList.selectedOptions);
  
    selectedOptions.forEach(function(option) {
      var animal = option.value;
      var animals = animalList.getElementsByTagName("li");
      var animalsToRemove = [];
  
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].textContent === animal) {
          animalsToRemove.push(animals[i]);
        }
      }
  
      animalsToRemove.forEach(function(animalToRemove) {
        animalList.removeChild(animalToRemove);
      });
    });
  }
  