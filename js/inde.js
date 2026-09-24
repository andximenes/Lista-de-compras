const descriptionItem = document.getElementById("input")
const btnAddItem = document.getElementById("addButton")
const ul = document.getElementById("shopping-list")

const alertBox = document.querySelector(".alert")
let alertTimeout

btnAddItem.addEventListener("click", () => {

    const item = descriptionItem.value.trim()

    if (item === "") {
        return
    }

    // cria o li
    const li = document.createElement("li")
    li.classList.add("item")


    // cria o checkbox
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.classList.add("checkbox-item")


    // cria o texto
    const span = document.createElement("span")
    span.classList.add("item-list")
    span.textContent = item


    // cria o ícone de excluir
    const imgX = document.createElement("img")
    imgX.classList.add("remove-icon")
    imgX.src = "/assets/icon delete.png"
    imgX.alt = "Remove item"

    //se checado
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            span.classList.add("checked")
        } else {
            span.classList.remove("checked")
        }
    })

    // remover item
    imgX.addEventListener("click", () => {
        li.remove()

        alertBox.classList.remove("hide")

        clearTimeout(alertTimeout)

        alertTimeout = setInterval(() => {
            alertBox.classList.add("hide")
        }, 2000)
        
    })



    // coloca tudo dentro do li
    li.appendChild(checkBox)
    li.appendChild(span)
    li.appendChild(imgX)


    // coloca o li dentro da ul
    ul.appendChild(li)


    // limpa o input
    descriptionItem.value = ""
})