export const map = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1, 
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2, 
  s: 3, t: 4, u: 6, v: 6, w: 6, x: 5, y: 1, z: 7,
};

export const getSingleDigit = (num) => {
  if (num === 0) return 0;
  let s = num % 9;
  return s === 0 ? 9 : s;
};
export const getBirthNumber = (dateString) => {
  const day = new Date(dateString).getDate();
  return getSingleDigit(day);
};

// 4. Calculate Driver Number (Full Date Sum)
export const getDriverNumber = (dateString) => {
  const digits = dateString.replace(/\D/g, ""); // Get only numbers
  const sum = digits.split("").reduce((acc, d) => acc + parseInt(d), 0);
  return getSingleDigit(sum);
};

// 5. Calculate Compound Number (Name Sum)
export const getCompoundNumber = (name) => {
  const cleanName = name.toLowerCase().replaceAll(" ", "");
  return cleanName.split("").reduce((acc, char) => {
    return acc + (map[char] || 0);
  }, 0);
};