const counter = document.getElementById("value");
const sub = document.getElementById("sub");
const reset = document.getElementById("res");
const addition = document.getElementById("add");

addition.addEventListener("click", (e) => {
  counter.innerHTML++;
});

sub.addEventListener("click", () => {
  counter.innerHTML--;
});

reset.addEventListener("click", () => {
  const resetDone = 0;
  counter.innerHTML = resetDone;
});
