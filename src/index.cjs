
function add(first, next) {
  return first + next;
}

function subtract(first, next) {
  return first - next;
}

exports.add = add;
exports.subtract = subtract;
exports.default = {
  add, subtract,
};
