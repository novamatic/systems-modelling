function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function outputOfLinearFunction(input, a_param, b_param) {
  return a_param * input + b_param;
}

function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

export function generateUArray(length) {
  const u_arr = [];

  for (let i = 0; i < length; i++) {
    u_arr.push(i + 1);
  }

  return u_arr;
}

export function generateYArray(length, UArray, variation, idealA, idealB) {
  const y_arr = [];

  for (let i = 0; i < length; i++) {
    const exactOutputValue = outputOfLinearFunction(UArray[i], idealA, idealB);
    y_arr.push(
      getRandomInRange(
        exactOutputValue - variation,
        exactOutputValue + variation
      )
    );
  }

  return y_arr;
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

export function calculateParams(U, Y) {
  const a = calculateAParam(U, Y);

  const b = calculateBParam(U, Y, a);
  return {
    a: Number(a.toFixed(3)),
    b: Number(b.toFixed(3)),
  };
}
