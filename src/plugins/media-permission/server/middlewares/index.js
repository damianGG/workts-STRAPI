
module.exports = (config, { strapi }) => {
    console.log('TU NIE DZIAŁA');
    return async (ctx, next) => {
        const user = ctx.state.user;
        const roleFolderMapping = {
            'Author': [], // Rola 'author' widzi tylko folder o ID 1
            'editor': [2, 3], // Rola 'editor' widzi foldery o ID 2 i 3
            'viewer': [], // Rola 'viewer' nie ma dostępu do żadnych folderów
            'super-admin': '*', // 'super-admin' widzi wszystkie foldery
        };

        if (user) {
            console.log(`User ID: ${user.id}, Role ID: ${user.role.id}`);
            const role = await strapi
                .query('plugin::users-permissions.role')
                .findOne({ where: { id: user.role.id } });

            const allowedFolders = roleFolderMapping[role.name];

            // Sprawdzenie, czy rola ma zdefiniowany dostęp do folderów
            if (allowedFolders === undefined || allowedFolders.length === 0) {
                return ctx.forbidden('Access to Media Library is restricted.');
            }

            // Pobierz ID folderu z zapytania (jeśli jest dostępne)
            const folderId = ctx.query?.folder || ctx.request.body?.folder || null;

            // Sprawdź, czy użytkownik próbuje uzyskać dostęp do dozwolonego folderu
            if (allowedFolders !== '*' && folderId && !allowedFolders.includes(parseInt(folderId, 10))) {
                return ctx.forbidden('Access to this folder is restricted.');
            }

            // Jeśli użytkownik jest autoryzowany i próbuje uzyskać dostęp do dozwolonego folderu
            await next();
        } else {
            return ctx.forbidden('You must be logged in to access the Media Library.');
        }
    };
};