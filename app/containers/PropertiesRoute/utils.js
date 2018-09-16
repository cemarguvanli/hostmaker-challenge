const getAddresses = (properties) => (
  properties.map((property) => (
    Object.keys(property.address)
      .map((addressKey) => property.address[addressKey])
      .join(' ')
  ))
);

const fetchPropertiesRoute = (data) => {
  const apiUrl = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyDNpaoitYV0_lcX-2aS8j20XAh8tcfV6Pk';
  const addresses = getAddresses(data);

  const promises = addresses.map((address) => fetch(`${apiUrl}&address=${address}`).then((res) => res.json()));

  return Promise.all(promises).then((results) => (
    results.map((res) => {
      const position = res.results[0].geometry.location;
      const address = res.results[0].formatted_address;
      const placeId = res.results[0].place_id;

      return {
        showInfo: false,
        placeId,
        position,
        address,
      };
    })
  ));
};

export { fetchPropertiesRoute };
