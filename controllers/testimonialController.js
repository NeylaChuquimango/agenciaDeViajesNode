import {Testimonial} from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {
    // console.log(req.body)

    //trim se encarga de quitar espacios
    //Validar...

    const {nombre, correo, mensaje} = req.body

    const errores = []

    if (nombre.trim()==='') {
        // console.log('el nombre está vacio')
        errores.push({mensaje: 'Él nombre está vacío'})
    }
    if (correo.trim()==='') {
        errores.push({mensaje: 'Él correo está vacío'})
    }
    if (mensaje.trim()==='') {
        errores.push({mensaje: 'Él mensaje está vacío'})
    }

    if(errores.length > 0){
        //Consultar Testimoniales existentes
        const testimoniales = await Testimonial.findAll()

        //MOstrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo, 
            mensaje,
            testimoniales
        })
    }else{
        //Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }
}

export {
    guardarTestimonial
}