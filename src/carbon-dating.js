const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const number = parseFloat(sampleActivity);
  if (
    !sampleActivity ||
    number <= 0 ||
    number > MODERN_ACTIVITY ||
    !Number.isFinite(number) ||
    typeof sampleActivity !== "string"
  ) {
    return false;
  }
  const result = Math.ceil(
    Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD)
  );
  return result;
};
