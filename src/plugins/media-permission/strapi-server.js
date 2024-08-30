'use strict';

module.exports = require('./server');
// module.exports = (config, { strapi }) => {
//     return async (ctx, next) => {
//         const user = ctx.state.user;

//         // Sprawdź, czy użytkownik jest zalogowany
//         if (user) {
//             // Pobierz rolę użytkownika
//             const role = await strapi
//                 .query('plugin::users-permissions.role')
//                 .findOne({ where: { id: user.role.id } });

//             // Definiowanie ról z dostępem do Media Library
//             const allowedRoles = ['super-admin', 'editor']; // Dodaj tutaj role, które mają dostęp

//             // Sprawdź, czy rola użytkownika jest wśród dozwolonych
//             if (!allowedRoles.includes(role.name)) {
//                 // Jeśli nie, zwróć błąd 403
//                 return ctx.forbidden('Access to Media Library is restricted.');
//             }
//         }

//         // Jeśli wszystko jest w porządku, przejdź dalej
//         await next();
//     };
// };
