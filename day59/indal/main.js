try {
  add();
} catch (e) {
  console.log("e");
} finally {
  console.log("Executaion always");
}
function add() {
  console.log("add");
}
