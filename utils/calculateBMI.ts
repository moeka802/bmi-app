export const calculateBMI = (props: {
  /**
   * 身長
   */
  height: number;
  /**
   * 体重
   */
  weight: number;
}) => {
  // BMIの計算処理
  const { height, weight } = props;
  if (height === 0) {
    return 0;
  }
  const height_m = height / 100;
  const bmi = weight / (height_m * height_m);
  return Math.round(bmi * 100) / 100;
};
