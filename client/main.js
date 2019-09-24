import './main.html';
import Events from "../collections";

Template.eventos.helpers({
    eventsList: () => {
        return Events.find({});
    }
});

Template.formulario.events({
    'submit form': (event) => {
        event.preventDefault();

        const target = event.target;

        const pNombre = target.nombre.value;
        const pDescripcion = target.descripcion.value;
        const pFechaInicio = target.fechaInicio.value;
        const pFechaFinal = target.fechaFinal.value;
        const pUbicacion = target.ubicacion.value;

        Events.insert({
            nombre: pNombre,
            descripcion: pDescripcion,
            fechaInicio: pFechaInicio,
            fechaFinal: pFechaFinal,
            ubicacion: pUbicacion
        });
    }
});