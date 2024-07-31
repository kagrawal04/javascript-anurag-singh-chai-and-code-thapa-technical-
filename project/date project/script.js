const form = document.querySelector("form");
const user1 = document.querySelector("input#user-1");
const user2 = document.querySelector("input#user-2");
const p = document.querySelector("p");
// console.log("kaushal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user1DOB = Date.now() - parseDOBString(user1.value).getTime();
  user2DOB = Date.now() - parseDOBString(user2.value).getTime();
  console.log(user1.value);
  console.log(user1DOB);
  console.log(user2DOB);

  if (user1DOB > user2DOB) {
    p.innerText = "User-1 is older than User-2";
  } else if (user2DOB > user1DOB) {
    p.innerText = "User-2 is older than User-1";
  } else {
    p.innerText = "Both are of same age";
  }
});

function parseDOBString(dobString) {
  const [dateString, timeString] = dobString.split(" ");
  const [day, month, year] = dateString.split("/").map((el) => Number(el));
  const [hour, minute] = timeString.split(":").map((el) => Number(el));
  return new Date(year, month - 1, day, hour, minute);
}
