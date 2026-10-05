const YOUTUBE_HOSTS = [
    "www.youtube.com",
    "youtube.com",
    "m.youtube.com",
    "youtu.be"
];

function isYouTubeURL(urlString) {
    try {
        const url = new URL(urlString);
        return YOUTUBE_HOSTS.includes(url.hostname);
    } catch {
        return false;
    }
}

function isYouTubeVideo(urlString) {
    try {
        const url = new URL(urlString);

        if (
            (url.hostname === "www.youtube.com" ||
             url.hostname === "youtube.com" ||
             url.hostname === "m.youtube.com") &&
            url.pathname === "/watch" &&
            url.searchParams.has("v")
        ) {
            return true;
        }

        if (
            (url.hostname === "www.youtube.com" ||
             url.hostname === "youtube.com" ||
             url.hostname === "m.youtube.com") &&
            url.pathname.startsWith("/shorts/")
        ) {
            return true;
        }

        if (
            url.hostname === "youtu.be" &&
            url.pathname.length > 1
        ) {
            return true;
        }

        return false;

    } catch {
        return false;
    }
}

async function openFreeTube(tabId, url) {
    const freeTubeURL = "freetube://" + url;

    try {
        await chrome.tabs.update(tabId, {
            url: freeTubeURL
        });
    } catch (error) {
        console.error("Failed to open FreeTube:", error);
    }
}


// Redirect normal YouTube navigation
chrome.webNavigation.onBeforeNavigate.addListener(
    async (details) => {
        if (details.frameId !== 0) {
            return;
        }

        if (!isYouTubeURL(details.url)) {
            return;
        }

        await openFreeTube(details.tabId, details.url);
    }
);


// Handle video clicks from content.js
chrome.runtime.onMessage.addListener(
    async (message, sender) => {
        if (
            message.action !== "openFreeTube" ||
            !sender.tab ||
            sender.tab.id === undefined
        ) {
            return;
        }

        if (!isYouTubeVideo(message.url)) {
            return;
        }

        await openFreeTube(sender.tab.id, message.url);
    }
);
