// Inicializa o controle de tema em um escopo isolado, sem criar variáveis globais.
(() => {
    const root = document.documentElement;
    const button = document.getElementById("botaoTema") || document.getElementById("themeToggle");

    // Aplica o tema ao HTML e aos controles nativos do navegador.
    // Atualiza também o ícone, o título e o rótulo acessível do botão.
    function applyTheme(theme) {
        const dark = theme === "dark";
        root.setAttribute("data-theme", theme);
        root.setAttribute("data-bs-theme", theme);
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