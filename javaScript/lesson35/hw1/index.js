// input string
// output result || null
export const parseUser = (jsonStr) => {
  try {
    const jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    return jsonObj;
  } catch (e) {
    console.log("Fail");
    return null;
  }
};
// parseUser('"name": "John"');
