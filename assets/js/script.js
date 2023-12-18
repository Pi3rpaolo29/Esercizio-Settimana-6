const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NjY2YTI2NzYxNDAwMTgzYzJmZDQiLCJpYXQiOjE3MDIzODkzNTQsImV4cCI6MTcwMzU5ODk1NH0.Rk4TJztDH4blI2eyS7NnigKcFCGpIrccQPXZz2V6UTw'
let url = `https://striveschool-api.herokuapp.com/api/product/`;
let data = "application/json"

/* class ItemToSell {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name,
            this.description = description,
            this.brand = brand,
            this.imageUrl = imageUrl,
            this.price = price
    }
} */

/* function ItemToSell(name, description, brand, imageUrl, price) {
    this.name = name,
    this.description = description,
    this.brand = brand,
    this.imageUrl = imageUrl,
    this.price = price
} */

document.addEventListener('DOMContentLoaded', () => {
    function formCreation() {
        document.querySelector('main .container .row form').innerHTML =
            `<div class="mb-3">
                        <p class='errorInput text-danger'></p>
                        <label for="InputName" class="form-label">Name</label>                        
                        <input type="text" class="form-control inputForm">
                    </div>
                    <div class="mb-3">
                        <p class='errorInput text-danger'></p>
                        <label for="InputDescription" class="form-label">Description</label>
                        <input type="text" class="form-control inputForm">
                    </div>
                    <div class="mb-3">
                        <p class='errorInput text-danger'></p>
                        <label for="InputBrand" class="form-label">Brand</label>
                        <input type="text" class="form-control inputForm">
                    </div>
                    <div class="mb-3">
                        <p class='errorInput text-danger'></p>
                        <label for="InputImageUrl" class="form-label">Image Url</label>
                        <input type="text" class="form-control inputForm">
                    </div>
                    <div class="mb-3">
                        <p class='errorInput text-danger'></p>
                        <label for="InputPrice" class="form-label">Price</label>
                        <input type="number" class="form-control inputForm">
                    </div>
                    <div class="mb-3 form-check">
                        <p class='errorCheckbox text-danger'></p>
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="exampleCheck1">Check me out if you are sure to Submit</label>
                    </div>
                    <button type="button" class="btn btn-primary" id="btnChanges">Submit</button>`
    };

    formCreation();
    function formValidation(){
        for (let i=0; i<document.querySelectorAll('.inputForm').length; i++){
            if(document.querySelectorAll('.inputForm')[i].value > 1 || document.querySelectorAll('.inputForm')[i].value.trim().length > 1){
                console.log('Bravo, hai inserito i dati giusti')
                document.querySelectorAll('.errorInput')[i].innerHTML = null;
            }
            else if(document.querySelector('.form-check-label')[i].checked === false ){
                
                document.querySelectorAll('.Checkbox')[i].innerHTML = ('Devi accettare le condizioni')
            }
            else{                
                console.log (('Devi cambiare il valore inserito in ') + (document.querySelectorAll('.form-label')[i].textContent) + (' : ') + (document.querySelectorAll('.inputForm')[i].value) + (' perchè il valore inserito è troppo piccolo '))
                document.querySelectorAll('.errorInput')[i].innerHTML = ('Devi cambiare il valore inserito in ') + (document.querySelectorAll('.form-label')[i].textContent) + (' : ') + (document.querySelectorAll('.inputForm')[i].value) + (' perchè il valore inserito è troppo piccolo ')
            }
        }
    }

    document.querySelector('#btnChanges').addEventListener('click', (e) =>{
        formValidation()
        e.preventDefault() /* Inibisce nel tasto submit l'azine di default */     
    });

    function pullSomething() {
        fetch(url, {
            method: 'POST',
            headers: { Authorization: apiKey, "Content-Type": data }, // il tipo del contenuto che sto inviando 
            body: JSON.stringify({
                    name: "Gala",
                    description: "Mariolino col motorino",
                    brand: "Samsu",
                    imageUrl: "https://learn.epicode.com",
                    price: 22,
                }) // nel body della richiesta invio il dato al server
        })
    };
    pullSomething();
    
    function getSomething() {
        fetch(url, {
                method: 'GET',
                headers: { Authorization: apiKey }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                    //createDettaglio(json)
            })
            .catch(error => console.log(error))
    };
    getSomething();

    
})


