# YouTube → FreeTube

Automatically redirects YouTube navigation and video links to [FreeTube](https://freetubeapp.io/).

This browser extension is designed for users who want to watch YouTube videos through FreeTube instead of loading and watching them on the normal YouTube website.

## Features

- Redirects YouTube video URLs to FreeTube
- Redirects YouTube Shorts to FreeTube
- Supports `youtu.be` video links
- Intercepts video clicks on YouTube and opens them in FreeTube
- Handles YouTube navigation and redirects supported YouTube URLs to FreeTube
- No tracking
- No analytics
- No advertisements
- No external servers
- No account required
- Open source

## Requirements

- A Chromium-based browser
- [FreeTube](https://freetubeapp.io/) installed
- FreeTube's `freetube://` URL scheme registered with your operating system

## Installation

### 1. Install FreeTube

Download and install FreeTube from the official website:

https://freetubeapp.io/

### 2. Download the extension

Download the latest release from the **Releases** section:

https://github.com/Mangaz7/youtube-freetube/releases

Download the `youtube-freetube-v0.1.0.zip` file and extract it.

After extracting, you should have a folder containing:

- `manifest.json`
- `background.js`
- `content.js`

**Do not select the ZIP file itself in the browser. You must extract it first.**

### 3. Open the Extensions page

Open:

`chrome://extensions`

Enable **Developer mode**.

### 4. Load the extension

Click **Load unpacked**.

Select the extracted folder containing:

- `manifest.json`
- `background.js`
- `content.js`

The extension should now appear in your extensions list.

### 5. Test

Open YouTube or navigate to a YouTube video.

Supported YouTube video links should automatically open in FreeTube.

If you are already on YouTube and click a video, the extension intercepts the click and opens the video in FreeTube instead.

## Using YouTube directly

The extension is designed to redirect YouTube navigation to FreeTube whenever possible.

There is currently no built-in option to temporarily allow normal YouTube browsing.

If you need to access other parts of YouTube directly, such as channels, playlists, comments, or other YouTube pages that are not supported by FreeTube, temporarily disable the extension from your browser's extensions page.

You can re-enable it when you want YouTube links to be redirected to FreeTube again.

## Privacy

This extension does not use analytics, tracking, external servers, or user accounts.

It operates locally in the browser and uses FreeTube's `freetube://` URL scheme to open videos.

## License

MIT License
