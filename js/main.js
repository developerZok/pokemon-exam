let ota = document.querySelector(".father")
for (let i = 0; i < 20; i++) {
    let div = document.createElement("div")
    div.innerHTML = `
    <img src="${pokemons[i].img}" width="310" height="180" class="card-img-top" alt="america">
    <div class="card-body">
    <h5 class="card-title">${pokemons[i].name}</h5>
    <p class="card-text">   ${pokemons[i].type}</p>
    
    </div>
    <div class="father-button">
    <button type="button" class="btn buttons"><i class="icon far fa-thumbs-up fa-2x" ></i></button>
    </div>
    </div>
    `
    div.style.width = "18rem"
    div.classList.add("card")
    ota.appendChild(div)
}
var counter = 0
var counter_span = document.querySelector('.counter-span')
counter_span.textContent = counter;
var buttons = document.querySelectorAll('.buttons')

for (const button of buttons) {
    button.addEventListener('click', function (e) {
        if (!button.classList.contains('rotate')) {
            counter += 1
            button.classList.add('rotate')
        } else {
            counter -= 1
            button.classList.remove('rotate')
        }
        counter_span.textContent = counter;
    })
}