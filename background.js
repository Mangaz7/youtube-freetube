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

// Automatically close blocked YouTube tabs after 1 second
const pendingCloseTimers = new Map();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const url = changeInfo.url || tab.url;

    if (!url) {
        return;
    }

    // YouTube tab detected
    if (isYouTubeURL(url)) {
        // Reset existing timer
        if (pendingCloseTimers.has(tabId)) {
            clearTimeout(pendingCloseTimers.get(tabId));
        }

        const timer = setTimeout(async () => {
            pendingCloseTimers.delete(tabId);

            try {
                const currentTab = await chrome.tabs.get(tabId);

                // Only close if the tab is still on YouTube
                if (
                    currentTab.url &&
                    isYouTubeURL(currentTab.url)
                ) {
                    await chrome.tabs.remove(tabId);
                }
            } catch {
                // Tab is already closed
            }
        }, 2000);

        pendingCloseTimers.set(tabId, timer);

        return;
    }

    // Navigation changed away from YouTube
    if (pendingCloseTimers.has(tabId)) {
        clearTimeout(pendingCloseTimers.get(tabId));
        pendingCloseTimers.delete(tabId);
    }
});

// Clean up timers when a tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    if (pendingCloseTimers.has(tabId)) {
        clearTimeout(pendingCloseTimers.get(tabId));
        pendingCloseTimers.delete(tabId);
    }
});
