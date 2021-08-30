let recipeData

const $label=$('#label');
const $input=$('input[type="text"]');

function handleGetData(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.edamam.com/api/recipes/v2?type=public&q=${$input.val()}&app_id=94686c3b&app_key=%20682a1a1e2dd05346d1bcd667e867ed16%09`
        //${$input.val()}

    }).then(
        function(data){
            //recipeData = JSON.parse(data.hits)
            for (let i = 0; i < data.hits.length; i++){
                $label.text(data.hits[i].recipe.label)
            }
            //$label.text(data.hits[0].recipe.label);


        }
    )
}

$('form').on('submit', handleGetData);