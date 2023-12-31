const { object, string } = require('yup')

const createSessionSchema = object({
    body: object({
        email: string()
            .email('Must be a valid email')
            .required('Email is required'),
        password: string()
            .required('Password is required')
            .min(6, 'Password is too short - should be 6 chars minimum.')
            .matches(
                /^[a-zA-Z0-9_.-]*$/,
                'Password can only contain Latin letters.'
            ),
    }),
})

const SessionSchema = {
    createSessionSchema,
}

module.exports = SessionSchema
