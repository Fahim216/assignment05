const searchfood=()=>{
    const searchText=document.getElementById('search-field').value;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //load data
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFood(data.meals))
}

const displayFood=foods=>{
    const foodContainer=document.getElementById('food-container');

    foods.forEach(food=>{
       
        const foodDiv=document.createElement('div');
        foodDiv.innerHTML=`
        <div class="col-md-4 food-item">
        <img src="${food.strMealThumb}" class="food-image">
        <h3 class="food-name">${food.strMeal}</h3>
        <ul><li>
        <p class="food-details">${food.strIngredient1}</p></li>
        <li> <p class="food-details">${food.strIngredient2}</p> </li>
        <li><p class="food-details">${food.strIngredient3}</p></li>
        <li><p class="food-details">${food.strIngredient4}</p></li>
        <li><p class="food-details">${food.strIngredient5}</p></li>
        <li><p class="food-details">${food.strIngredient6}</p></li>
        </ul>
        
        
        `
        foodContainer.appendChild(foodDiv);

    })
}

