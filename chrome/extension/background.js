let intialPrice = 0;

const Badge = {
  init() {
    window.setInterval(() => {
      fetch('https://api.binance.com/api/v1/ticker/price?symbol=VETBTC')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let formattedPrice = +data.price * 100000000;
        formattedPrice = formattedPrice.toFixed();

        if (formattedPrice > intialPrice) {
          chrome.browserAction.setBadgeText({ text: formattedPrice.toString() });
          chrome.browserAction.setBadgeBackgroundColor({color: "#080" });
        } else {
          chrome.browserAction.setBadgeText({ text: formattedPrice.toString() });
          chrome.browserAction.setBadgeBackgroundColor({color: "#c45c50" });
        }

        intialPrice = formattedPrice;
      });
    }, 10000);
  },
};

Badge.init();
