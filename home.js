window.onload = function () {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        browser.tabs.get(tabs[0].id, function (tab) {
            $('#info').qrcode(tab.url);
        });
    });
};