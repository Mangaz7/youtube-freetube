# YouTube → FreeTube

Automatically redirects YouTube video links to [FreeTube](https://freetubeapp.io/).

This browser extension is designed for users who want to watch YouTube videos through FreeTube instead of loading the normal YouTube website.

## Features

- Redirects YouTube videos directly to FreeTube
- Supports YouTube videos, Shorts and `youtu.be` links
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

**Do not select the ZIP file itself in the browser. You must extract it first.**

### 3. Open the Extensions page

Open the following address in your Chromium-based browser:

`chrome://extensions`

Enable **Developer mode**.

### 4. Load the extension

Click **Load unpacked**.

Select the extracted folder containing:

- `manifest.json`
- `background.js`

The extension should now appear in your extensions list.

### 5. Test

Open a YouTube video.

The video should automatically open in FreeTube instead of loading the normal YouTube website.
