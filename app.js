// let a = "indonesia"
// let b = "ndoineias"

// const data = {
//     string1: a,
//     string2: b,
//     result: anagram(a, b)
// }

function submitData() {
  let string1 = document.getElementById("string1"),
    string2 = document.getElementById("string2");
  const data = {
    string1: string1.value,
    string2: string2.value,
    result: anagram(string1.value, string2.value),
  };
  createElement("tr", data, "result-data");
  string1.value = "";
  string2.value = "";
}
