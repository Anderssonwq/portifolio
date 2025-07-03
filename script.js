document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link tem um href que corresponde a um ID na mesma página
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Se for um link de navegação dentro da mesma página (com ID correspondente), faz o scroll suave
            if (targetElement) {
                e.preventDefault(); // Impede o comportamento padrão de navegação
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Realiza a transição suave
                    block: 'start' // Alinha o início do elemento alvo com o topo da janela
                });
            }
            // Se o link não for para uma seção interna, permite o comportamento padrão (redirecionamento)
        });
    });
});
