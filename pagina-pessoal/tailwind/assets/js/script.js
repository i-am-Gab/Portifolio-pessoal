// Inicializa o controle de tema em um escopo isolado, sem criar variáveis globais.
(() => {
    const root = document.documentElement;
    const button = document.getElementById("botaoTema") || document.getElementById("themeToggle");

    // Aplica o tema ao HTML e aos controles nativos do navegador.
    // Atualiza também o ícone, o título e o rótulo acessível do botão.
    function applyTheme(theme) {
        const dark = theme === "dark";
        root.setAttribute("data-theme", theme);

        root.style.colorScheme = theme;

        if (button) {
            const label = dark ? "Ativar tema claro" : "Ativar tema escuro";
            button.setAttribute("aria-label", label);
            button.setAttribute("title", label);
            const icon = button.querySelector("i");
            if (icon) {
                icon.className = button.id === "botaoTema"
                    ? (dark ? "bi bi-sun-fill" : "bi bi-moon-fill")
                    : (dark ? "fa-solid fa-sun" : "fa-solid fa-moon");
                icon.setAttribute("aria-hidden", "true");
            }
        }
    }

    // Recupera a preferência da última visita, quando o navegador permite.
    let savedTheme;
    try {
        savedTheme = localStorage.getItem("theme");
    } catch {
        // A alternância continua funcionando quando o armazenamento está bloqueado.
    }
    // Na ausência de uma preferência válida, usa o tema do sistema operacional.
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme);

    if (button) {
        // Alterna entre claro e escuro ao clicar e salva a escolha para a próxima visita.
        button.addEventListener("click", () => {
            const theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            applyTheme(theme);
            try {
                localStorage.setItem("theme", theme);
            } catch {
                // A preferência vale para a página atual mesmo sem persistência.
            }
        });
    }
})();

// Inicializa o menu responsivo em um escopo separado do controle de tema.
(() => {
    const button = document.getElementById('botaoMenu');
    const menu = document.getElementById('menuPrincipal');
    const desktop = window.matchMedia('(min-width: 992px)');

    // Mostra ou oculta o menu e informa seu estado às tecnologias assistivas.
    function setMenu(open) {
        menu.classList.toggle('hidden', !open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    }

    // O botão abre o menu fechado ou fecha o menu aberto.
    button.addEventListener('click', () => {
        setMenu(button.getAttribute('aria-expanded') !== 'true');
    });

    // Em telas pequenas, fecha o menu após a navegação e leva o foco à seção escolhida.
    // tabindex="-1" permite focar a seção sem adicioná-la à sequência normal de Tab.
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (desktop.matches) return;
            setMenu(false);
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                section.setAttribute('tabindex', '-1');
                section.focus({ preventScroll: true });
            }
        });
    });

    // Escape fecha o menu aberto e devolve o foco ao botão de navegação.
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            button.focus();
        }
    });

    // Reinicia o estado do menu ao cruzar o limite de 992 px.
    // A exibição no desktop permanece sob controle das classes responsivas do Tailwind.
    desktop.addEventListener('change', () => setMenu(false));
})();
