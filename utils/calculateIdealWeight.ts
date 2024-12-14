export const calculateIdealWeight = (props: { height: number }) => {
  const { height } = props;
  const height_m = height / 100; // mに換算
  const ideal_weight = height_m * height_m * 22;
  return Math.round(ideal_weight * 100) / 100;
};
