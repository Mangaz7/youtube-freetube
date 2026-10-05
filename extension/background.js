const YOUTUBE_HOSTS = [
    "www.youtube.com",
    "youtube.com",
    "m.youtube.com",
    "youtu.be"
];

function isYouTubeVideo(urlString) {
    try {
        const url = new URL(urlString);

        if (!YOUTUBE_HOSTS.includes(url.hostname)) {
            return false;
        }

        // YouTube video
        if (
            (url.hostname === "www.youtube.com" ||
             url.hostname === "youtube.com" ||
             url.hostname === "m.youtube.com") &&
            url.pathname === "/watch" &&
            url.searchParams.has("v")
        ) {
            return true;
        }

        // YouTube Shorts
        if (
            (url.hostname === "www.youtube.com" ||
             url.hostname === "youtube.com" ||
             url.hostname === "m.youtube.com") &&
            url.pathname.startsWith("/shorts/")
        ) {
            return true;
        }

        // youtu.be/videoID
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

chrome.webNavigation.onBeforeNavigate.addListener(
    async (details) => {

        // Only the main page, never an iframe
        if (details.frameId !== 0) {
            return;
        }

        if (!isYouTubeVideo(details.url)) {
            return;
        }

        const freeTubeURL = "freetube://" + details.url;

        try {
            await chrome.tabs.update(details.tabId, {
                url: freeTubeURL
            });
        } catch (error) {
            console.error("Failed to open FreeTube:", error);
        }
    }
);
