import React from 'react';

const PlanetsContext = React.createContext([]);

const PlanetsProvider = PlanetsContext.Provider;
const PlanetsConsumer = PlanetsContext.Consumer;

export {PlanetsProvider, PlanetsConsumer}