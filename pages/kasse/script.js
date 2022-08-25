document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get("paymentId");
  if (paymentId) {
    const checkoutOptions = {
      checkoutKey: "test-checkout-key-4207776c4e464cbc856b02e980e26c38",
      paymentId: paymentId,
      containerId: "checkout-container-div",
    };
    const checkout = new Dibs.Checkout(checkoutOptions);
    checkout.on("payment-completed", function (response) {
      alert("hej");
    });
  } else {
    console.log("Expected a paymentId"); // No paymentId provided,
    alert("hej2");
  }
});
