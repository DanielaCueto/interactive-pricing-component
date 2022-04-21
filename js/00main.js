/* to do: al deslizar el 'slider' se tiene que ir incrementando el precio de diferentes numeros de vista de página. 
Si el visitante cambia el 'toggle' para facturación anual, se aplicará un 25% de descuento en todos los precios.  */

/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

"use strict";

let views = document.querySelector(".card__views"); //
let slider = document.querySelector(".slider");
let priceMonth = document.querySelector(".price__container--pricing");
let switchToggle = document.querySelector(".switch");

let yearlyBilling = document.querySelector(".input"); //input

//console.log(views, slider, priceMonth, switchToggle);

const viewData = [
  {
    pageViews: "10K",
    monthlyCost: 8,
  },
  {
    pageViews: "50K",
    monthlyCost: 12,
  },
  {
    pageViews: "100K",
    monthlyCost: 16,
  },
  {
    pageViews: "500K",
    monthlyCost: 24,
  },
  {
    pageViews: "1M",
    monthlyCost: 36,
  },
];

function findPacketSelected() {
  const packetId = parseInt(slider.value);
  let packetSelected = viewData[packetId];
  console.log(packetSelected);
  return packetSelected;
}

function applyDiscount(packetSelected) {
  if (yearlyBilling.checked) {
    const actualPrice = packetSelected.monthlyCost;
    const finalPrice = actualPrice - actualPrice * 0.25;
    return finalPrice;
  } else {
    return packetSelected.monthlyCost;
  }
}

function updatePricing() {
  const foundPacket = findPacketSelected()
  const finalPrice = applyDiscount(foundPacket);
  updateHtml(foundPacket.pageViews, finalPrice)
  
}
function updateHtml (viewNumber, finalPrice ){
  views.innerHTML = `${viewNumber} PAGEVIEWS`;
  priceMonth.innerHTML = `$${finalPrice.toFixed(2)}`;
}

slider.addEventListener("change", updatePricing);
yearlyBilling.addEventListener("change", updatePricing);
