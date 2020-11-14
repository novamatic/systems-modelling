function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function outputOfLinearFunction(input, aParam, bParam) {
  return aParam * input + bParam;
}

function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

function generateUArray(length) {
  const u_arr = [];

  for (let i = 0; i < length; i++) {
    u_arr.push(i + 1);
  }

  return u_arr;
}

function generateIdealYArray(UArray, idealA, idealB) {
  const newArr = [];
  for (let i = 0; i < UArray.length; i++) {
    newArr.push(outputOfLinearFunction(UArray[i], idealA, idealB));
  }
  return newArr;
}

export function calculateModelYArray(idealYArray, variation) {
  return idealYArray.map((idealY) =>
    getRandomInRange(idealY - variation, idealY + variation)
  );
}

function getProductOfArrays(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}

function getPow2ArrayValues(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], 2));
  }
  return newArr;
}

function calculateAParam(U, Y) {
  return (
    (U.length * sumArray(getProductOfArrays(U, Y)) -
      sumArray(U) * sumArray(Y)) /
    (U.length * sumArray(getPow2ArrayValues(U)) - Math.pow(sumArray(U), 2))
  );
}

function calculateBParam(U, Y, a_param) {
  return (sumArray(Y) - a_param * sumArray(U)) / U.length;
}

function calculateParams(U, Y) {
  const a = calculateAParam(U, Y);

  const b = calculateBParam(U, Y, a);
  return {
    modelAParam: Number(a.toFixed(3)),
    modelBParam: Number(b.toFixed(3)),
  };
}

function calculateIdentificationQuality(idealYArray, modelYArray) {
  const newArr = [];

  for (let i = 0; i < idealYArray.length; i++) {
    newArr.push(Math.pow(idealYArray[i] - modelYArray[i], 2));
  }

  return Number((sumArray(newArr) / idealYArray.length).toFixed(3));
}

export function calculateModelElements(idealA, idealB, length, variation) {
  const UArray = generateUArray(length);
  const idealYArray = generateIdealYArray(UArray, idealA, idealB);
  const modelYArray = calculateModelYArray(idealYArray, variation);
  const identificationQuality = calculateIdentificationQuality(
    idealYArray,
    modelYArray
  );
  const { modelAParam, modelBParam } = calculateParams(UArray, modelYArray);

  const returnObj = {
    UArray,
    modelYArray,
    modelAParam,
    modelBParam,
    identificationQuality,
  };

  return returnObj;
}
