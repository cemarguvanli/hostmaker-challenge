const getAddresses = (properties) => (
  properties.map((property) => (
    Object.keys(property.address)
      .map((addressKey) => property.address[addressKey])
      .join(' ')
  ))
);

async function fetchAsync(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const fetchPropertiesRoute = async (data) => {
  const apiUrl = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyDNpaoitYV0_lcX-2aS8j20XAh8tcfV6Pk';
  const addresses = getAddresses(data);

  const promises = addresses.map((address) => fetchAsync(`${apiUrl}&address=${address}`));
  const solvedResults = await Promise.all(promises);

  return solvedResults.map((res) => {
    const { results: [item] } = res;

    const position = item.geometry.location;
    const address = item.formatted_address;
    const placeId = item.place_id;

    return {
      showInfo: false,
      placeId,
      position,
      address,
    };
  });
};

export { fetchPropertiesRoute };
