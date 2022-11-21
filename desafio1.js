

class ticketManager{
    preciosBaseGanancia
        constructor(){
            this.events = []
            this.preciosBaseGanancia = 0.20
        }
}

getEvents = () => {return this.events}

getNextID = () =>{
        const count = this.events.length 
        if (count == 0) return 1 

        const lastEvent = this.events[count -1]
        const lastID = lastEvent.id
        const NextID = lastID + 1

        return NextID
}

addProducts = (name, place, price, capacity, date) => {
    const od = this.getNextID()

    const event = {
        id,
        name,
        pricePorDefecto : price,
        price : price * (1 + this.preciosBaseGanancia),
        capacity : capacity ?? 50,
        date : date ?? new Date ().toLocaleDateString(),
        participantes : [],
    }

    this.events.push(event)
}

addParticipante = (eventID , placeNuevo , dateNuevo) => {
    const event = this.events.find(event=> event.id == eventID);
    const {name, pricePorDefecto, capacity} = event;
    
    this.addProducts(name, placeNuevo, pricePorDefecto, capacity, dateNuevo)
} 

const manager = new ticketManager ()
manager.addEvent (nombreUno, nombreDos, 1685)
manager.addEvent (nombreTres, nombreCuatro, 1655)

manager.addParticipante(5, 123)
manager.addParticipante(5, 456)
manager.addParticipante(5, 789)

manager.eventoVuelta(5, nombreSeis )

console.log(manager.events);