document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');

    function alternarPasso(idDoProximoPasso) {
        passos.forEach(passo => passo.classList.remove('ativo'));
        
        const proximoPasso = document.getElementById(idDoProximoPasso);
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    }

    // Gerencia o avanço da história
    document.querySelectorAll('.btn-proximo').forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoId = botao.dataset.proximo;
            alternarPasso(proximoId);
        });
    });

    // Gerencia o retorno da história (Botão de Voltar)
    document.querySelectorAll('.btn-voltar').forEach(botao => {
        botao.addEventListener('click', () => {
            const voltarId = botao.dataset.voltar;
            alternarPasso(voltarId);
        });
    });
});
