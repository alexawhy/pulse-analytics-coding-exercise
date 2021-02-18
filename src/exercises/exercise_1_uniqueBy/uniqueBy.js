export default function uniqueBy(data, key) {
  // * Write function here
  let existedValue = {};
  let uniqueData = [];

  for (let i = 0; i < data.length; i++) {
    existedValue[data[i][key]] = i;    
  }

  for (key in existedValue) {
    uniqueData.push(data[existedValue[key]]);
  }

  return uniqueData;
}
