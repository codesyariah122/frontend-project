function anagram(string1, string2) {
  // valid string
  let len1 = string1.length;
  let len2 = string2.length;
  if (len1 !== len2) console.error("Invalid Input");

  let str1 = string1.split("").sort().join("");
  let str2 = string2.split("").sort().join("");

  let result = str1 === str2 ? true : false;

  return result;
}

let items = [];
let newEl = "";
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
