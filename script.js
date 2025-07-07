document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("mensagem-btn");
    const mensagemDiv = document.getElementById("mensagem");

    btn.addEventListener("click", function () {
        mensagemDiv.innerHTML = "<p><strong>✨ Você é capaz de realizar grandes coisas! ✨</strong></p>";
    });
});