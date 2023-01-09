/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#NombresDominio").innerHTML = generateNombres();
};
let generateNombres = () => {
  let pronoun = ["Our", "the"];
  let adj = ["big", "small", "great", "smelly"];
  let sust = ["horse", "racoon", "dog", "cat"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let sustIndex = Math.floor(Math.random() * sust.length);

  return (
    pronoun[pronounIndex] + "" + adj[adjIndex] + "" + sust[sustIndex] + ".com"
  );
};
