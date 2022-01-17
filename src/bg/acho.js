class Acho {

    growl = () => {
        chrome.browserAction.setBadgeBackgroundColor({ color: '#F00' }, () => {
            chrome.browserAction.setBadgeText({ text: '+' });
        });
    }

    quiet = () => {
        chrome.browserAction.setBadgeText({});
    }
}
