const ServiceAPI = {
    services: [
    { id: 1, name: "МУЖСКАЯ СТРИЖКА", price: 211 },
    { id: 2, name: "ДЕТСКАЯ СТРИЖКА", price: 123 },
    { id: 3, name: "СТРИЖКА МАШИНКОЙ", price: 111 },
    { id: 4, name: "Dods СТРИЖКА", price: 234 },
    { id: 5, name: "Cats СТРИЖКА", price: 123 },
    { id: 6, name: "Girls СТРИЖКА", price: 231 }
  ],
  all: function() { return this.services},
  get: function(id) {
    const isService = p => p.id === id
    return this.services.find(isService);
  }
};

export default ServiceAPI;
