
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
            
            $("main").empty()
            data.hits.forEach((recipes, index) => {
                const div = $("<div class='name'>")
                div.html(`<h3><a href="${recipes.recipe.url}" target="_blank"> ${recipes.recipe.label} </a> </h3>
                <div class="wrap">
                    <img src="${recipes.recipe.image}">
                    <div class="textBox">
                        <p>Portions: ${recipes.recipe.yield}</p>
                        <p>Diet Labels: ${recipes.recipe.dietLabels}</p>
                    </div>
                
                </div>
                `)
                
                $("main").append(div);
                $input.val("");
                
            })


        }
    )
}

$('form').on('submit', handleGetData);