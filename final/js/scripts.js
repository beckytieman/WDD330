const menuPlannerAPI = 'https://api.spoonacular.com/mealplanner/generate?apiKey=d24bd4ed8e3c434ab0abe91776e5e357&timeFrame=day';

fetchMealPlanner();

function handler(e) {
    e.preventDefault();
    const { value } = document.getElementById('search');
    if (value) {
      window.location.href = `results.html?q=${value}`;
    }
  }

  function fetchMealPlanner() {
    fetch(menuPlannerAPI)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            `Oops! Status Code: ${response.status}`
          );
          return;
        }
  
        response.json().then(function(data) {
          console.log(data);
          showMenuPlan(data.meals);
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  function showMenuPlan(data) {
    const appendCards = document.querySelector('.meals');
    data.forEach(results => {
      appendCards.innerHTML += getCard(results);
    });
  }

  function getCard(params) {
    return `
      <div class="card-container">
                  <a href=recipe.html?id=${params.id}>
                    <div
                      class="card"
                    >
                    <div
                        class="text-overlay"
                      >
                        cooks in ${params.readyInMinutes} minutes
                      </div>
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