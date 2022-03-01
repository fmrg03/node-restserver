const express = require('express')
const cors = require('cors')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/users'

        //Middlewares
        this.middlewares()
        //Routes
        this.routes()
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'))
        // CORS
        this.app.use(cors())
        // Lectura y Parseo del Body
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usuariosPath , require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }
}


module.exports = Server;