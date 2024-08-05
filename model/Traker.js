import mongoose from "mongoose";

//Creamos el Schema
const TrackerSchema = mongoose.Schema({
    latitud: {
        type: String
    },
    longitud: {
        type: String
    },
    create_at:{
        type: Date,
        default:Date.now
    },
    update_at:{
        type: Date,
        default:Date.now
    }
})

//Retornamos solo los datos que nesecitamos ver no el passsword, no el __v, no _id esto es del Schema y al _id le cambiamos el nombre visualmente
TrackerSchema.methods.toJSON = function(){
    const {__v, _id, ...traker} = this.toObject();
    traker.uid = _id;
    return traker;
}

//Creamos el modelo dentro colocamos el nombre de la coleccion y le pasamos el schema, la coleccione ahora en mongo sera Articulo
const Traker = mongoose.model('Traker',TrackerSchema);

//Exportamos el modelo
export default Traker;