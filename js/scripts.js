//* Business Logic

function beepBoop(number) {
  const numArray = [number];
  const newArray = []
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      console.log("pass3");
      newArray.push("Won't you be my neighbor")
    } else if (i.toString().includes(2)) {
      console.log("pass2");
      newArray.push("Boop!")
    } else if(i.toString().includes(1)) {
      console.log("pass1");
      newArray.push("Beep!")
    } else {
      console.log("passNum");
      newArray.push(i);
    }
  }

    return newArray;
  }
  
  
  //return numArrayList;

//* UI Logic

// function handleSubmission() {
//   event.preventDefault();
//   const submitButton = document.getElementById("submit-button");
//   const form = document.querySelector("form")
//   document.getElementById("arrayInput").innerText=numArrayList
  
//   form.addEventListener("submit", handleSubmission);
//   form.addEventListener("reset", resetForm)

//   function handleSubmission(event){
//     event.preventDefault();
//   }
// };

