const selectRULangItem = document.querySelector('#RU')
const selectENLangItem = document.querySelector('#EN')
const ruElements = document.querySelectorAll(".RU")
const enElements = document.querySelectorAll(".EN")

const setLenguage = (e) => {
    switch (e.target.id) {
        case "RU": {
            selectRULangItem.classList.add('active')
            selectENLangItem.classList.remove('active')
            enElements.forEach((e) => {
                e.classList.add('vanish')
            })
            ruElements.forEach((e) => {
                e.classList.remove("vanish")
            })
            break
        }
        
        case "EN": {
            selectENLangItem.classList.add('active')
            selectRULangItem.classList.remove('active')

            ruElements.forEach((e) => {
                e.classList.add('vanish')
            })
            enElements.forEach((e) => {
                e.classList.remove("vanish")
            })
            break
        }
    }
}

selectENLangItem.addEventListener("click", setLenguage)
selectRULangItem.addEventListener("click", setLenguage)
