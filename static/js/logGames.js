let btn = document.querySelector("#norrisJokes")
let j = document.querySelector("#joke");
let category = document.querySelector("select").value

let url = "https://api.chucknorris.io/jokes/random"
let urlTwo =  "https://api.chucknorris.io/jokes/random?category={category}"
let risorsa


btn.addEventListener("click", function (e) {
    e.preventDefault()
    
    let endpoint

    if(category === "empty"){
        endpoint = url
    } else {
        endpoint = url + "?category=" + category
    }

    risorsa = fetch(endpoint).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)
            return resp.json()
        }
    ).then(
        function (data) {
            console.log(data.value)
            j.innerHTML = data.value
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )

    
    console.log(risorsa)
    // stati delle promises: 
    // 1. stato pending
    // 2. stato rejected
    // 3. stato fulfilled

})

