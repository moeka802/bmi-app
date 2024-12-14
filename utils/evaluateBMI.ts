export const evaluateBMI = (props: { bmi: number }) => {
  const { bmi } = props;
  if (bmi < 18.5) {
    // 18.5未満
    return "痩せすぎ";
  } else if (bmi < 25.0) {
    // 18.5〜25未満
    return "普通体重";
  } else if (bmi < 30.0) {
    // 25〜30未満
    return "肥満(1度)";
  } else if (bmi < 35.0) {
    // 30〜35未満
    return "肥満(2度)";
  } else if (bmi < 40.0) {
    // 35〜40未満
    return "肥満(3度)";
  } else {
    // 40以上
    return "肥満(4度)";
  }
};
