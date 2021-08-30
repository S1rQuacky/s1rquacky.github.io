const $input=$('input[type="text"]')

function handleGetData(event) {
    event.preventDefault();
    $.ajax({
        url: `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=94686c3b&app_key=%20682a1a1e2dd05346d1bcd667e867ed16%09`
        //${$input.val()}

    })
}