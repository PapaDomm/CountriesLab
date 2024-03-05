document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your custom JavaScript logic here
    // For example, you can perform form validation or submit data asynchronously using AJAX
  });

class Country {
    constructor(name, lang, greeting, colors, flag){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

    DisplayColors = () => {
        let length = this.colors.length
        let colSize = Math.round(12 / length)

        document.getElementById("start").innerHTML = ''
        document.getElementById("images").innerHTML = ''

        this.colors.forEach(color => {

            let newDiv = document.createElement("div");

            newDiv.classList.add(`col-${colSize}`)
            newDiv.style.height = "10REM"
            newDiv.style.backgroundColor = color;

            let enddiv = document.getElementById("enddiv")
            document.getElementById("start").insertBefore(newDiv, enddiv);
        })

        let flagIMG = document.createElement("img");

        flagIMG.src = this.flag;
        flagIMG.setAttribute("class", "col-8 mt-2 rounded mx-auto d-block")


        document.getElementById("images").insertBefore(flagIMG, document.getElementById("endimages"));

        let nameTAG = document.querySelector("#NAME")
        nameTAG.setAttribute("class", "text-center")
        nameTAG.innerText = this.name

        let langTAG = document.querySelector("#LANG")
        langTAG.setAttribute("class", "text-center")
        langTAG.innerText = this.lang

        let helloTAG = document.querySelector("#HELLO")
        helloTAG.style.marginLeft = "1.1REM"
        helloTAG.innerText = this.greeting

        let anything = "";
        let colorsTAG = document.querySelector("#COLORS");
        this.colors.forEach((color) => {
            console.log(color);
            anything += color + " ";
        })

        colorsTAG.innerText = anything;
        colorsTAG.style.marginLeft = "1.1REM";

    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://www.flagcolorcodes.com/data/flag-of-mexico.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://www.flagcolorcodes.com/data/flag-of-algeria.png");
let germany = new Country("Germany", "German", "gutentag", ["black", "red", "yellow"], "https://www.flagcolorcodes.com/images/jpg/germany.jpg");
let canada = new Country("Canada", "Murican/English", "Soreey", ["red", "white"], "https://www.flagcolorcodes.com/images/webp/canada.webp");
let japan = new Country("Japan", "Japanese", "Konichiwa", ["red", "white"], "https://www.flagcolorcodes.com/images/webp/japan.webp");


let countries = [usa, mexico, algeria, germany, canada, japan, china]; 

countries.forEach(country => {
    let newChoice = document.createElement("option");
    newChoice.value = country.name;
    newChoice.innerText = country.name;

    document.getElementById("startdrop").insertBefore(newChoice, document.getElementById("stopdrop"));
})

function showCurrent(countryName){
    let country = countries.filter(country => country.name === countryName)[0];
    country.DisplayColors();
}