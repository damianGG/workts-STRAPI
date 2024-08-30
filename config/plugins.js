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
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});

