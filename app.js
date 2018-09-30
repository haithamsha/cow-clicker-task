// Cow image element.
const cowImg = document.querySelector("#cow-img");

// Cow image counter
let cowCounter = document.querySelector("#cow-counter");

// Listen the cow image when click it.
cowImg.addEventListener('click', () => {
    // Increment the counter by one every time.
    cowCounter.innerText = Number(cowCounter.innerText) + 1;
})