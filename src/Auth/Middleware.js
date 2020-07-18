const AuthMiddleware = {
    login: async function (request, response, next) {
        if (! request.body.code) {
            return response.status(400).json({
                'type': 'error',
                'code': 1,
                'message': 'Field email is required.'
            });
        }

        if (! request.body.password) {
            return response.status(400).json({
                'type': 'error',
                'code': 2,
                'message': 'Field password is required.'
            });
        }

        return next();
    }
}

module.exports = AuthMiddleware;
