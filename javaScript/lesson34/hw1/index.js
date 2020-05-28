var text = "demo argo";

function useless(ninjaCallbacks) {
  return ninjaCallbacks;
}
function getText() {
  return text;
}

const assert =
  (useless(function () {
    return text;
  }) === text,
  "the useless function works!" + text);
