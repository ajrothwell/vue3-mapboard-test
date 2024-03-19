// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

console.log('test');

import mapboard from '@phila/mapboard/src/main.js';

var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@ea6dd85bf8f82b6ff0d582b2e27cd47a53320ca6/config.js';

import parcels from './general/parcels';

// data sources
import threeOneOneCarto from './data-sources/311-carto';
import condoList from './data-sources/condo-list';
import crimeIncidents from './data-sources/crime-incidents';
import divisions from './data-sources/divisions';
// import dorCondoList from './data-sources/dor-condo-list';
import dorDocuments from './data-sources/dor-documents';
import electedOfficials from './data-sources/elected-officials';
import liBusinessLicenses from './data-sources/li-business-licenses';
import liBuildingCertSummary from './data-sources/li-building-cert-summary';
import liBuildingCerts from './data-sources/li-building-certs';
import liInspections from './data-sources/li-inspections';
import liPermits from './data-sources/li-permits';
import liViolations from './data-sources/li-violations';
import liBuildingFootprints from './data-sources/li-building-footprints';
import nearbyZoningAppeals from './data-sources/nearby-zoning-appeals';
import nextElectionAPI from './data-sources/election-next';
import opa from './data-sources/opa';
import pollingPlaces from './data-sources/polling-places';
import rco from './data-sources/rco';
// import regmaps from './data-sources/regmaps';
import vacantIndicatorsPoints from './data-sources/vacant-indicator-points';
import zoningAppeals from './data-sources/zoning-appeals';
import zoningBase from './data-sources/zoning-base';
import zoningDocs from './data-sources/zoning-docs';
import zoningDocsEclipse from './data-sources/zoning-docs-eclipse';
import zoningOverlay from './data-sources/zoning-overlay';
import nearbyPermits from './data-sources/nearby-permits.js';
import nearbyViolations from './data-sources/nearby-violations.js';

// Topics
import property from './topics/property';
import condos from './topics/condos';
import deeds from './topics/deeds';
import li from './topics/li';
import zoning from './topics/zoning';
// import polling from './topics/polling';
// import rcoTopic from './topics/rco';
import nearby from './topics/nearby';
import voting from './topics/voting';


mapboard({
  agoTokenNeeded: false,
  resetDataOnGeocode: true,
  resetDataExtra: {
    'ActiveLiBuilding': {},
    'ActiveLiBuildingCert': [],
  },
  app: {
    title: 'test',
  },
  header: {
    enabled: true,
    text: 'Atlas',
  },
  panels: [
    'topics',
    // 'map',
  ],
  baseConfig: BASE_CONFIG_URL,
  router: {
    enabled: true,
    type: 'vue',
    // returnToDefaultTopicOnGeocode: false,
  },
  greeting: {
    message: 'test',
  },
  customComps: {},
  dataSources: {
    threeOneOneCarto,
    condoList,
    crimeIncidents,
    divisions,
    // dorCondoList,
    // dorDocuments,
    electedOfficials,
    liBusinessLicenses,
    liBuildingCertSummary,
    liBuildingCerts,
    liInspections,
    liPermits,
    liViolations,
    liBuildingFootprints,
    nearbyZoningAppeals,
    nextElectionAPI,
    opa,
    pollingPlaces,
    rco,
    // regmaps,
    vacantIndicatorsPoints,
    zoningAppeals,
    // zoningBase,
    zoningDocs,
    zoningDocsEclipse,
    // zoningOverlay,
    nearbyPermits,
    nearbyViolations,
  },
  topics: [
    property,
    condos,
    deeds,
    li,
    zoning,
    voting,
    nearby,
  ],
  defaultAddressTextPlaceholder: {
    // text: "Search Address or 9-digit OPA Property Number",
    wideStyle: {
      'max-width': '100%',
      'font-size': '24px',
      'line-height': '28px',
    },
    narrowStyle: {
      'max-width': '100%',
      'font-size': '20px',
      'line-height': '24px',
    },
  },
  geolocation: {
    enabled: true,
    icon: [ 'far', 'dot-circle' ],
  },
  addressInput: {
    width: 415,
    mapWidth: 300,
    position: 'right',
    autocompleteEnabled: false,
    autocompleteMax: 15,
    placeholder: 'Search the map',
  },
  rootStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  // gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
  parcels,
  components: [
    {
      type: 'topic-set',
      options: {
        defaultTopic: 'property',
      },
    },
  ],
})