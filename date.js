//jshint esversion: 6

exports.getDate = function getDate() {
  const today = new Date();
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", dateOptions);
};

exports.getDay = function getDay() {
  const today = new Date();
  const dateOptions = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", dateOptions);
};
