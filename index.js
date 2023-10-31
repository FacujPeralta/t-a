document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const results = document.getElementById("results");
  
    // Supongamos que tienes una lista de elementos para buscar.
    const elementos = [
      "ventanas",
      "Elemento 2",
      "Elemento 3",
      // Agrega más elementos aquí
    ];
  
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredElementos = elementos.filter(function(elemento) {
        return elemento.toLowerCase().includes(searchTerm);
      });
  
      displayResults(filteredElementos);
    });
  
    function displayResults(resultsArray) {
      results.innerHTML = "";
      if (resultsArray.length === 0) {
        results.innerHTML = "No se encontraron resultados.";
      } else {
        resultsArray.forEach(function(result) {
          const resultItem = document.createElement("div");
          resultItem.textContent = result;
          results.appendChild(resultItem);
        });
      }
    }
  });
  