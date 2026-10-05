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

document.addEventListener(
    "click",
    (event) => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const url = link.href;

        if (!isYouTubeVideo(url)) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        chrome.runtime.sendMessage({
            action: "openFreeTube",
            url: url
        });
    },
    true
);
