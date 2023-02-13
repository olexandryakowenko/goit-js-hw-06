const list = document.getElementById("categories");


console.log(`Number of categories: ${list.children.length}\n `);

for (let i = 0; i < list.children.length; i++) {
  console.log(`Category: ${list.children[i].firstElementChild.textContent}`);

  console.log(
    `Elements: ${list.children[i].lastElementChild.children.length}\n `
  );
}