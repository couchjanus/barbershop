const BarberAPI = {
    barbers: [
        {
          id:1, 
          name:'Roman', 
          available:true,
          clients: [
            'Jake Lingwall',
            'Sarah Drasner',
            'Merrick Christensen'
          ]
        },
        {
          id:2, 
          name:'Michael', 
          available:true,
          clients: [
            'John Drasner',
            'Ban Lingwall',
            'Met Lee'
          ]
        },
        {
          id:3, 
          name:'Danylo', 
          available:true,
          clients: [
            'Chris Jake ',
            'Sarah Lingwall',
            'Nim Chris'
          ]
        }
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
