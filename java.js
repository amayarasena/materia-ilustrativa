function abrirMenu() {
    document.getElementById("menu-lateral").classList.add ("ativo");
    document.getElementById("overlay").style.display = "block";
}

function fecharMenu() {
    document.getElementById("menu-lateral").classList.remove("ativo");
    document.getElementById("overlay").style.display = "none";
}