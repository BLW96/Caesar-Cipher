function cipherRot13(str) {
  str = str.toUpperCase();

  return (document.getElementById("codedInput").value = str.replace(
    /[A-Z]/g,
    rot13
  ));

  function rot13(respond) {
    const charCode = respond.charCodeAt();
    return String.fromCharCode(
      charCode + 13 <= 90 ? charCode + 13 : ((charCode + 13) % 90) + 64
    );
  }
}

// cipherRot13("SERR PBQR PNZC");
// console.log(cipherRot13("POS NIOE ETPO"));

document.getElementById("convert").addEventListener("click", function () {
  let alpha = document.getElementById("alphaInput").value;
  cipherRot13(alpha);
});
