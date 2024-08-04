import { Router } from "express";
import { check } from 'express-validator'
import { savetracker } from "../controller/tracker.js";
const route = Router();

//Rutas publicas

//Ruta para crear el usuario
route.post('/',savetracker)


export default route