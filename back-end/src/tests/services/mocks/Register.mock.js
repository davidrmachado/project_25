const newUser = {
    name: "Gabriel Barbosa",
    email: "gabigol@email.com",
    password: "$#reiDaLibertadores#$",
}

const returnNewUser = {
    id: 1,
    name: "Gabriel Barbosa",
    email: "gabigol@email.com",
    password: "$#reiDaLibertadores#$",
    role: 'customer'
}

const user = {
    id: 1,
    name: "Gabriel Barbosa",
    email: "gabigol@email.com",
    role: 'administrator'
}

const userNotAdm = {
    id: 1,
    name: "Gabriel Barbosa",
    email: "gabigol@email.com",
    role: 'seller'
}

module.exports = { newUser, returnNewUser, user, userNotAdm };