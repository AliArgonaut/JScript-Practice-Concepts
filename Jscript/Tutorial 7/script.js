let test = Math.floor(Math.random(5));
console.log("test below");
console.log(test);

function generate() {
  const numput = Number(document.getElementById("numOfnums").value);
  const letput = Number(document.getElementById("numOflets").value);
  const spcput = Number(document.getElementById("numOfspc").value);

  const numlist = "1234567890";
  const letlistlower = "abcdefghijklmnopqrstuvwxyx";
  const letlistupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const spclist = "!@#$%&+=?";

  let product = "";

  function letterPick() {
    if (letput > 0) {
      for (let x = 0; x < letput; x++) {
        let ndexgenlet = Math.floor(Math.random() * 25);
        console.log(`letter index chosen is ${ndexgenlet}`); //test
        let letterCase = Math.floor(Math.random() * 2);
        if ((letterCase = 1)) {
          product += letlistupper[ndexgenlet];
          console.log(`the product so far is ${product}`); //test
        } else {
          product += letlistlower[ndexgenlet];
          console.log(`the product so far ${product}`); //test
        }
      }
    } else {
      return;
    }
  }

  function numberPick() {
    if (numput > 0) {
      for (let y = 0; y < numput; y++) {
        let ndexgennum = Math.floor(Math.random() * 10);
        console.log(`were at numbers now! generatd index ${ndexgennum}`); //test
        product += numlist[ndexgennum];
        console.log(`the product so far ${product}`);
      }
    } else {
      return;
    }
  }

  function SpcPick() {
    if (spcput > 0) {
      for (let z = 0; z < spcput; z++) {
        let ndexgenspc = Math.floor(Math.random() * 9);
        console.log(`onto specials now, index ${ndexgenspc}`);
        product += spclist[ndexgenspc];
        console.log(`the product so far ${product}`);
      }
    } else {
      return;
    }
  }

  letterPick();
  numberPick();
  SpcPick();
  document.getElementById("producttextbox").textContent = product;
}
