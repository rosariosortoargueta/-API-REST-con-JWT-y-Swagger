import {Router} from 'express'
import prisma from "../config/prisma.js"

const userRouter = Router()

userRouter.get("/", (req, res) => {
    // BUSCAR EN LA BASE DE DATOS
    console.log("Alguien consulto el endpoint");
    res.status(200).json({message: "Endpoint de obtener funcionando al 100% del INO"})
})

userRouter.post("/create", async (req, res) => {
    //EXTRAER LOS DATOS DEL BODY
    const {studentCode, firstName, lastName, email, password, phone, birthDate} = req.body
   
    //VALIDAR LOS DATOS
    if (!studentCode || !firstName || !lastName || !email || !password || !phone || !birthDate){
        return res.status(400).json({
            success: false,
            message: "Faltan datos: studentCode, firstName, lastName, email, password, phone son requeridos"
        })
    }

try{
  const newStudent = await prisma.student.create({      
        "studentCode": studentCode,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phone": phone,
        "birthDate": birthDate
})
res.status(201).json({success: true, message: "Estudiante creado correctamente",})
} catch (error) {
res.status(500).json({success: false, message: "Error interno del servidor"})
}


})

userRouter.put("/update/:id", (req, res) => {
    const { id } = req.params

    const {name, age} = req.body
    if (!name || !age){
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(200).json({message: `El usuario con ID: ${id} se ha actualizado`})
})

userRouter.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({message: `El usuario con ID: ${id} se ha eliminado`})
})

userRouter.get("/test/:id", (req, res) => {
    res.status(200).json({message: `hola a la formacion de docentes con `})
})

export default userRouter