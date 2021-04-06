const urlParams = new URLSearchParams(window.location.search);

const recipeId = urlParams.get('id');
const recipeURL = "https://api.spoonacular.com/recipes/" + recipeId +"/information?apiKey=d24bd4ed8e3c434ab0abe91776e5e357";


console.log(recipeId);
fetch(recipeURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = showRecipe(jsObject);
    const ingredientContainer = document.querySelector('.ingredients-list');
    const recipeTitle = document.getElementById('recipe-title');
    recipeTitle.innerHTML = jsObject.title;
    //ingredientContainer.innerHTML = showIngreds(jsObject)
    var ingredientsList =  document.createElement('ul');
        for (i = 0; i < jsObject.extendedIngredients.length; i++) {
            var list = document.createElement('li');
            list.innerHTML = jsObject.extendedIngredients[i]["amount"] +
            " " +
            jsObject.extendedIngredients[i]["unit"] +
            " " +
            jsObject.extendedIngredients[i]["name"];

        ingredientsList.append(list);
    }
    ingredientContainer.append(ingredientsList);
    });
    


  function showRecipe(params) {
    return `
      <div class="recipe">
                      <img
                        src = "https://spoonacular.com/recipeImages/${params.id}-556x370.jpg"
                        class="img-recipe"
                      />
                      <div class="recipe-info">
                      <p class="pt-3"> Cooks in ${params.readyInMinutes} minutes</p>
                      <p> Servings: ${params.servings}</p>
                      <p>${params.instructions}</p>
                        </div>
                      </div>
                  
              </div>
              `;
  }
  function showIngreds(params) {
    
}