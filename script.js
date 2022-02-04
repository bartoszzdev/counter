let count = 0
const btn = document.querySelectorAll(".btn")
const value = document.getElementById("value")

btn.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList

        if (styles.contains("increase")) {
            count++
        } else if (styles.contains("decrease")) {
            count--
        } else {
            count = 0
        }

        getNumberColor()

        value.textContent = count
    })
})

function getNumberColor() { 
    if (count > 0) {
        value.style.color = "green"
    } else if (count < 0) {
        value.style.color = "red"
    } else {
        value.style.color = "#000"
    }
}


