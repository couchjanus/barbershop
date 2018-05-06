const BarberAPI = {
    barbers: [
        {id:1, name:'Roman', available:true},
        {id:2, name:'Michael', available:true},
        {id:3, name:'Danylo', available:true}
      ],
  all: function() { 
    return this.barbers;
  },
  get: function(id) {
    const isBarber = p => p.id === id;
    return this.barbers.find(isBarber);
  }
};

export default BarberAPI;
