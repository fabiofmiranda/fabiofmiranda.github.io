document.getElementById('form-confirmacao').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const pessoas = document.getElementById('pessoas').value;
    const confirmacao = document.getElementById('confirmacao').value;

    if (confirmacao === 'sim') {
        alert(`Obrigado, ${nome}! Sua presença e a de ${pessoas} pessoa(s) foram confirmadas.`);
    } else {
        alert(`Que pena que você não poderá comparecer, ${nome}. Mas agradecemos por avisar!`);
    }

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
});