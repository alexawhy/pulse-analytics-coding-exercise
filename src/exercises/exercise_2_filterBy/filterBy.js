export default function filterBy(data, searchTerm, keys) {
  // * Write function here
  let filteredData = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      let datum = data[i];
      let key = keys[j];
      if (datum[key].toLowerCase().includes(searchTerm.toLowerCase()) && !filteredData.includes(datum)) {
        filteredData.push(datum);
      }
    }
  }

  return filteredData;
}
