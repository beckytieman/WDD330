const urlParams = new URLSearchParams(window.location.search);

const myAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d24bd4ed8e3c434ab0abe91776e5e357";

const resultsArray = [];

const ready = callback => {
    if (document.readyState !== 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
  };

ready(function() {
    if (urlParams.has('q')) {
      fetchResults(urlParams.get('q'));
    }
});

function fetchResults(query){
    console.log(query);
    fetching(true);
    fetch(`${myAPI}&query=${query}&offset=${resultsArray.length}`)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            `Oops!. Status Code: ${response.status}`
          );
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          if (!resultsArray.length && !data.results.length) {
            showMessage();
          }
          resultsArray.push(...data.results);
          showData(data);
        });
  
        fetching(false);
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fetching(state) {
    const loader = document.querySelector('.loader');
    if (state) {
      loader.classList.remove('hidden');
    } else {
      loader.classList.add('hidden');
    }
  }

function showMessage(){
    console.log(resultsArray);
}
function showData(data) {
    if (data.results.length) {
      const appendValue = document.querySelectorAll('.results-query-name');
      appendValue.forEach(element => {
        if (!element.innerHTML) {
          if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
          }
          element.append(urlParams.get('q'));
        }
      });
    }

    const appendCards = document.querySelector('.show-results');
  data.results.forEach(results => {
    appendCards.innerHTML += getCard(results);
  });

  // show load more button
  if (data.totalResults > resultsArray.length) {
    loadMoreButton.classList.remove('hidden');
  }
}

function getCard(params) {
    return `
      <div class="card-container">
                  <a href=recipe.html?id=${params.id}>
                    <div
                      class="card"
                    >
                      <img
                        src = "https://spoonacular.com/recipeImages/${params.id}-556x370.jpg"
                        class="img-card"
                      />
                      <div class="py-2 px-2">
                        <div class="my-3 font-bold font-title text-center">
                          ${params.title}
                        </div>
                      </div>
                    </div>
                  </a>
              </div>
              `;
  }

