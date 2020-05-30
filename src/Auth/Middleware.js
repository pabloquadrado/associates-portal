const AuthMiddleware = {
    login: async function (request, response, next) {
        if (! request.body.email) {
            return response.status(400).json({
                'type': 'error',
                'message': 'Field email is required.'
            });
        }

        if (! request.body.password) {
            return response.status(400).json({
                'type': 'error',
                'message': 'Field password is required.'
            });
        }

        return next()
    }
}

module.exports = AuthMiddleware;
