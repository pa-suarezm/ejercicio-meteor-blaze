import { Meteor } from 'meteor/meteor';
import Events from "../collections";

Meteor.startup(() => {
  // code to run on server at startup
  if(Events.find().count() === 0){
    console.log("No events in collection");
    let dummyEvents = [
      {nombre: "Debate Electoral", descripcion: "lorem ipsum", fechaInicio: "09-23-2019", fechaFinal: "09-27-2019", ubicacion: "ML"},
      {nombre: "Conferencia TI", descripcion: "lorem ipsum", fechaInicio: "01-14-2019", fechaFinal: "02-02-2019", ubicacion: "SD"}
    ];

    dummyEvents.forEach((e) => {
      Events.insert(e);
    });
  }
});
