const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const start_locations = this.journeys.map(journey => {
    return journey.startLocation
  })
  return start_locations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end_locations = this.journeys.map(journey => {
    return journey.endLocation
  })
  return end_locations
};

Traveller.prototype.getJourneyTransportTypes = function() {
  const transport_types = this.journeys.map(journey => {
    return journey.transport
  })
  return transport_types
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results = this.journeys.filter(journey => journey.transport === transport);
  
  return results
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter(journey => journey.distance >= minDistance);
  
  return results
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const sumDistance = this.journeys.reduce((totalDistance, journey)=>{
    return totalDistance + journey.distance;
  }, 0)

  return sumDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const transport_types = this.getJourneyTransportTypes();
  const unique_transport_types = transport_types.filter(unique);
  return unique_transport_types;
}


module.exports = Traveller;