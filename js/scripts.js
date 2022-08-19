//* Business Logic

function beepBoop(number) {
  const numArray = [number];
  const newArray = []
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      newArray.push("Won't you be my neighbor")
    } else if (i.toString().includes(2)) {
      newArray.push("Boop!")
    } else if(i.toString().includes(1)) {
      newArray.push("Beep!")
    } else {
      newArray.push(i);
    }
  }

    return newArray;
  }

//* UI Logic

function handleSubmission() {
  event.preventDefault();
  const number = document.getElementById("num").value;
  const beepBoopNew = beepBoop(number);
  document.getElementById("arrayInput").innerText = beepBoopNew;
};

window.addEventListener("load", function() {
  document.querySelector("form#numberScan").addEventListener("submit", handleSubmission);
});

