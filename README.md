# YouTube → FreeTube

Automatically redirects YouTube navigation and video links to [FreeTube](https://freetubeapp.io/).

This browser extension is designed for users who want to watch YouTube videos through FreeTube instead of loading and watching them on the normal YouTube website.

## Features

- Redirects YouTube video URLs to FreeTube
- Redirects YouTube Shorts to FreeTube
- Supports `youtu.be` video links
- Intercepts video clicks on YouTube and opens them in FreeTube
- Handles supported YouTube navigation and redirects it to FreeTube
- Works with YouTube links opened from other websites and applications
- Useful for YouTube links shared through social media, messaging apps, and other platforms such as Discord and Telegram
- Helps prevent YouTube videos from being opened and played directly in the browser
- No tracking
- No analytics
- No advertisements
- No external servers
- No account required
- Open source

## Why use YouTube → FreeTube?

YouTube links are shared everywhere — websites, social media, messaging applications, and other desktop applications.

Instead of opening a YouTube video in your browser, this extension redirects supported YouTube video links to FreeTube.

For example, a YouTube link shared through:

- Websites
- Social media
- Discord
- Telegram
- Other messaging applications
- Direct links opened in your browser

can be handled by the extension and opened in FreeTube instead.

This allows you to use FreeTube as your primary way of watching YouTube videos without having to manually copy and paste video links into FreeTube.

## Requirements

- A Chromium-based browser
- [FreeTube](https://freetubeapp.io/) installed
- FreeTube must be able to open `freetube://` links

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
- `rules.json`

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
- `rules.json`

The extension should now appear in your extensions list.

### 5. Test

Open a YouTube video or click a YouTube video link.

Supported YouTube video links should automatically open in FreeTube.

If you are already on YouTube and click a video, the extension intercepts the click and opens the video in FreeTube instead.

You can also test the extension by opening a YouTube link from another application such as Telegram or Discord.

## Using YouTube directly

The extension is designed to redirect supported YouTube navigation to FreeTube whenever possible.

There is currently no built-in option to temporarily allow normal YouTube browsing.

If you need to access other parts of YouTube directly, such as channels, playlists, comments, or other YouTube pages that are not supported by FreeTube, temporarily disable the extension from your browser's extensions page.

You can re-enable it when you want YouTube links to be redirected to FreeTube again.

## Privacy

This extension does not use analytics, tracking, external servers, or user accounts.

It operates locally in the browser and uses FreeTube's `freetube://` URL scheme to open videos.

The extension does not require an account or send data to any external service.

## Compatibility

The extension is designed for Chromium-based browsers that support Manifest V3 extensions.

FreeTube is available for Windows, macOS, and Linux.

Compatibility with the `freetube://` protocol depends on FreeTube being properly installed and registered as a protocol handler by the operating system.

## License

MIT License
