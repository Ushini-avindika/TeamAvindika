import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@example.com',
        password: bcrypt.hashSync('123456', 10),
        isEditor: true,
    },
    {
        name: 'Makadure Madush',
        email: 'madush@example.com',
        password: bcrypt.hashSync('123456', 10),
        isReviwer: true,
    },
    {
        name: 'Agasthi sankalana',
        email: 'agasthi@example.com',
        password: bcrypt.hashSync('123456', 10),
        isUser: true,
    },
]

export default users