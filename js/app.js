const icone = document.getElementById("iconeTema");

function mudar() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        icone.classList.remove("bi-moon-fill");
        icone.classList.add("bi-sun");
    } else {
        icone.classList.remove("bi-sun");
        icone.classList.add("bi-moon-fill");
    }
}
console.log(alternar)
