// let a = "indonesia"
// let b = "ndoineias"

// const data = {
//     string1: a,
//     string2: b,
//     result: anagram(a, b)
// }

function submitAllAnagram() {
  let string = document.getElementById("string");
  const data = {
    string: string.value,
    results: allanagrams(string.value),
  };
  newCreateElement("tr", data, "result-anagram");
  string.value = "";
}

function submitAnagram() {
  let string1 = document.getElementById("string1"),
    string2 = document.getElementById("string2");
  if (string1.value === "" || string2.value === "") {
    alert("please input field string");
    return 0;
  }

  const data = {
    string1: string1.value,
    string2: string2.value,
    results: anagram(string1.value, string2.value),
  };
  createElement("tr", data, "result-data");
  string1.value = "";
  string2.value = "";
}
