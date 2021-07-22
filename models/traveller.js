const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => {
    return journey.startLocation})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => {
    return journey.endLocation})
};

Traveller.prototype.getJourneyTransportTypes = function() {
  return this.journeys.map(journey => {
    return journey.transport})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey)=>{
    return totalDistance + journey.distance}, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index}
  
  const transport_types = this.getJourneyTransportTypes();
  return transport_types.filter(unique);
};


module.exports = Traveller;