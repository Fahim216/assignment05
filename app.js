const searchfood=()=>{
    const searchText=document.getElementById('search-field').value;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFood(data.meals))
}


const displayFood=food=>{
    const foodContainer=document.getElementById('food-container');


   food.forEach(food=> {
       const foodDiv=document.createElement('div');
       foodDiv.className='single-result row align-items-center my-3 p-3';
       foodDiv.innerHTML=`
       <div class="col-md-9">
       <h3 class="lyrics-name">purple</h3>
       <p class="author lead">Album</p>
       </div>
       <div class="col-md-3 text-md-right text-center">
       <button class="btn btn-success">Get Lyrics</button>
       </div>

       `
       foodContainer.appendChild(foodDiv);
   })
}