import { calculateBMI } from "@/utils/calculateBMI";
import { expect, jest, test } from "@jest/globals";

describe("calculateBMI", () => {
  type TestData = {
    param: Parameters<typeof calculateBMI>[0];
    expected: ReturnType<typeof calculateBMI>;
  };

  const testData: TestData[] = [
    {
      param: {
        height: 170,
        weight: 60,
      },
      expected: 20,
    },
    {
      param: {
        height: 180,
        weight: 50,
      },
      expected: 20,
    },
    {
      param: {
        height: 130,
        weight: 20,
      },
      expected: 20,
    },
  ];

  test.each(testData)("入力値と結果 %o", ({ param, expected }) => {
    expect(calculateBMI(param)).toEqual(expected);
  });
});
