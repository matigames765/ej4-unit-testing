/*
Se necesita una función que recibe un valor de año y devuelva el Siglo correspondiente.

1705 --> 18
1900 --> 19
1601 --> 17
*/

function yearToCentury(year) {
  if (year >= 1 && year <= 99) {
    return 1;
  } else {
    const century = year / 100;
    return Math.ceil(century);
  }
}

test("year 56", () => {
  const year1 = 56;
  expect(yearToCentury(year1)).toBe(1);
});

test("year 1894", () => {
  const year2 = 1894;
  expect(yearToCentury(year2)).toBe(19);
});

test("year 832", () => {
  const year3 = 832;
  expect(yearToCentury(year3)).toBe(9);
});

test("year 933", () => {
  const year4 = 933;
  expect(yearToCentury(year4)).toBe(10);
});

test("year 272", () => {
  const year5 = 272;
  expect(yearToCentury(year5)).toBe(3);
});
