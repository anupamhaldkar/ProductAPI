// Car objects representing brand, model, and year
var car1 = {
  brand: 'Honda',
  model: 'City',
  year: 2020
};

var car2 = {
  brand: 'Tata',
  model: 'Safari',
  year: 2019,
};

function mergeCars(carA, carB) {
  const merged = {};
  for (let prop in carA) {
    merged[prop] = carA[prop];
  }

  for (let prop in carB) {
    if (merged.hasOwnProperty(prop)) {
      merged[prop] = [merged[prop], carB[prop]];
    }
  }

  return merged;
}

const mergedCar = mergeCars(car1, car2);
console.log(mergedCar);
