const counter = document.getElementById("value");
const sub = document.getElementById("sub");
const reset = document.getElementById("res");
const addition = document.getElementById("add");

addition.addEventListener("click", (e) => {
  counter.innerHTML++;
  applyColor();
});

sub.addEventListener("click", () => {
  counter.innerHTML--;
  applyColor();
});

reset.addEventListener("click", () => {
  const resetDone = 0;
  counter.innerHTML = resetDone;
});

const applyColor = () => {
  if (counter.innerHTML > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "red";
  }
};
