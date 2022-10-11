let items = [];
let newEl = "";

function allanagrams(string) {
  if (string.length === 0) return [""];
  let result = {};
  string.split("").forEach((letter, i) => {
    let remainingLetters = string.slice(0, i) + string.slice(i + 1);
    allanagrams(remainingLetters).forEach((anagram) => {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
}

function anagram(string1, string2) {
  // valid string
  let len1 = string1.length;
  let len2 = string2.length;
  if (len1 !== len2) console.error("Invalid Input");

  let str1 = string1.split("").sort().join("");
  let str2 = string2.split("").sort().join("");

  let result =
    str1 === str2
      ? "<span style='font-size:100px;'>&#128077;</span>"
      : "<span style='font-size:100px;'>&#10060;</span>";

  return result;
}

function createElement(el, data, dom) {
  items.push(data);
  newEl = document.createElement(el);
  items.map((d) => {
    newEl.innerHTML = `
        <tr>
        <td>${d.string1}</td>
        <td>${d.string2}</td>
        <td><strong style="color: firebrick;">${d.result}</string></td>
        </tr>
    `;
  });
  document.getElementById(dom).appendChild(newEl);
}

function newCreateElement(el, result, dom) {
  items.push(result);
  newEl = document.createElement(el);
  items.forEach((d) => {
    newEl.innerHTML = `
        <tr>
        <td>${d.string}</td>
        <td width="200">
          ${d.results.join(", ")}
        </td>
        </tr>
    `;
    document.getElementById(dom).appendChild(newEl);
  });
}
