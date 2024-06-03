module.exports = ({ env }) => ({
    config: {
        locales: ["fr", "en"],
        translations: {
            fr: {
                "app.components.HomePage.welcome": "Bienvenue à bord !",
                "app.components.HomePage.welcome.again": "Bienvenue ",
            },
        },
        'drag-drop-content-types': {
            enabled: true
        }
    },
    // Dodaj inne konfiguracje pluginów tutaj
});