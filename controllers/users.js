

const usersGet = (req, res) => {

    const query = req.query

    res.json({
        msj: 'Hola mundo GET - Controlador',
        query
    })
}

const usersPost = (req, res) => {
    const { nombre, edad } = req.body

    res.json({
        msj: 'Hola mundo POST - Controlador',
        nombre,
        edad
    })

}

const usersPut = (req, res) => {
    const id = req.params.id
    res.json({
        msj: 'Hola mundo PUT - Controlador',
        id
    })
}

const usersDelete = (req, res) => {
    res.json({ msj: 'Hola mundo DELETE - Controlador' })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}