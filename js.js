$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("#car").click(function () {
  $("#nazv_car").css("text-decoration", "underline dotted");

  setTimeout(function () {
    $("#nazv_car").css("text-decoration", "none");
  }, 10000);
});

$("#po").click(function () {
  $("#poems").css("text-decoration", "underline dotted");

  setTimeout(function () {
    $("#poems").css("text-decoration", "none");
  }, 10000);
});

$("#podro").click(function () {
  $("#podrob").css("text-decoration", "underline dotted");

  setTimeout(function () {
    $("#podrob").css("text-decoration", "none");
  }, 10000);
});

const sliderElement = document.getElementById("elementId");
const h4Element = document.getElementById("schet");

const inputChangeEventHadler = (e) => {
  const inputValue = e.target.value;
  h4Element.innerHTML = inputValue;
};

sliderElement.addEventListener("input", inputChangeEventHadler);
/*
const submitButtonElement = document.getElementById("otpr");

submitButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  alert("sdfdf");
});
*/
const button = document.getElementById("otpr");
const input = document.getElementById("exampleInputEmail1");

const onButtinClick = (e) => {
  e.preventDefault();
  alert("Ваша фамилия " + input.value);
};
button.addEventListener("click", onButtinClick);

const main = () => {
  const targetInput = document.getElementById("exampleInputPassword1");
  const radioButtons = Array.from(
    document.getElementsByClassName("input-disable-toggler")
  ).flat();

  const onRadioButtonToggle = (e) => {
    if (e.target.id === "exampleRadios1") {
      targetInput.disabled = true;
    }

    if (e.target.id === "exampleRadios2") {
      targetInput.disabled = false;
    }
  };

  radioButtons.forEach((item) => {
    item.addEventListener("click", onRadioButtonToggle);
  });
};

document.addEventListener("DOMContentLoaded", main);
