const rateState = document.querySelector(".rateState"); // rate card
const thankYouState = document.querySelector(".thankYouState"); //thanks card

const rateNumbers = document.querySelectorAll(".rateNumbers"); // ul>li
const rateSubmit = document.querySelector(".rateSubmit"); //submit button
let rating = document.getElementById("rating"); //span rating

//change card
rateSubmit.addEventListener("click", () => {
    thankYouState.classList.remove("hidden");
    rateState.classList.add("hidden");
});

    //validation submit
    

    //rateRefresh
rateNumbers.forEach(rate => {
    if (rating.textContent == "0") {
        rateSubmit.disabled = true;
    } else {
        rateSubmit.disabled = false;
    };
    
    rate.addEventListener("click", () => {
        let selectedNumber = rate.innerHTML;
        rating.innerHTML = selectedNumber; 
        rateSubmit.disabled = false;
        })
    
        
})


