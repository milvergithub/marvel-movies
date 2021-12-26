// JSON
const values = {
  1: {
    carrier: 'CCH',
    service: 'DEX',
  },
  17: {
    carrier: 'CHP',
    service: 'express',
  },
};
// JSON
const json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

const result = {};
// eslint-disable-next-line guard-for-in,no-restricted-syntax
for (const jsonKey in json.data) {
  // eslint-disable-next-line max-len
  const { limit, over_carrier_service_id: over, under_carrier_service_id: under } = json.data[jsonKey];
  result[jsonKey] = {
    limit,
    over: values[over],
    under: values[under],
  };
}

console.log(result);
