module.exports = (config, { strapi }) => {
    console.log('Media access control middleware loaded 11');
    return async (ctx, next) => {
        const { user } = ctx.state;
        console.log(ctx.state);
        // Sprawdź, czy użytkownik jest zalogowany i jaka jest jego rola
        console.log('dzialam');
        if (user && user.role.name === 'Editor') {
            const restrictedFolders = ['workts', 'pp', 'Aktywnakobieta']; // Lista folderów, które mają być ukryte

            // Zmodyfikuj zapytanie, aby wykluczyć określone foldery
            ctx.query.filters = {
                ...ctx.query.filters,
                folder: { $notIn: restrictedFolders },
            };
        }

        await next();
    };
};