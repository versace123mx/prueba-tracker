import Traker from '../model/Traker.js'

//Registrar usuario
const savetracker = async (req,res) => {

    //hacemos desestructuring
    const { latitud, longitud } = req.query

    //creamos un objeto usuario y le asignamos los datos que vamos a guardar, los que destructuramos y el resto
    const tracker = new Traker({latitud,longitud})

    //Guardar en DB
    try {
        await tracker.save()
        console.log('datos guardatos')
        res.status(200).json({status:"success",msg:"Se ha guardado correctamente los datos",tracker})
    } catch (error) {
        return res.status(400).json({status:"error",msg:"Se produjo un erro al guardar el registro",error})
    }
}

export {
    savetracker
}