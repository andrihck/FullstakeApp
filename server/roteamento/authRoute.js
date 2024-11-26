import express from 'express'
import {registro, login} from '../controlador/authControl.js'


const rotas = express.Router()

rotas.post('/registro', registro)
rotas.post('/login', login)

export {rotas}