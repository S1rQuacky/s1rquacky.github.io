//let recipeData



let $label=$('#label');
//let $result=$('#result');
const $input=$('input[type="text"]');

function handleGetData(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.edamam.com/api/recipes/v2?type=public&q=${$input.val()}&app_id=94686c3b&app_key=%20682a1a1e2dd05346d1bcd667e867ed16%09`
        //${$input.val()}


    }).then(
        function(data){
            //brought up the data but only single search and last of 20 per page
            //recipeData = JSON.parse(data.hits)
            // for (let i = 0; i < data.hits.length; i++){
            //   $(ul).append(`<li>${data.hits[i].recipe.label}</li>`)
               
            // }
            //$label.text(data.hits[0].recipe.label);
            $("main").empty()
            data.hits.forEach((recipes, index) => {
                const div = $("<div>")
                div.html(`<h3><a href="${recipes.recipe.url}" target="_blank"> ${recipes.recipe.label} </a> </h3>`)
                //${recipes.recipe.url}  -- added the link next to title, but no hyperlink
                $("main").append(div);
                $input.val("");
                
            })


        }
    )
}

$('form').on('submit', handleGetData);