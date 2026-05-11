# Assets Guide

I have included some in the `ASSETS` directory. I cannot share other assets for obvious copyright reasons. Please source your own assets and place all the following files directly in the root folder alongside the source code.

| Character      | Accepted Filenames                                                                               | Notes                                                                                                                                                                                                                |
| :------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Black Hanekawa | `black_hanekawa.gif`                                                                             | [Link](https://danbooru.donmai.us/posts/631990?q=parent%3A631990)                                                                                                                                                    |
| Hanekawa       | `hanekawa.png`                                                                                   | [Source](https://www.monogatari-series.com/illustration/)                                                                                                                                                            |
| Hitagi         | `hitagi.png` or `hitagi.mp4`                                                                     | [Source](https://bakemonogatari.fandom.com/wiki/Dreamy_date_drive)                                                                                                                                                   |
| Suruga         | `suruga.png`                                                                                     | [Link](https://www.deviantart.com/greenmapple17/art/Kanbaru-Suruga-Bakemonogatari-Minimalism-519427727)                                                                                                              |
| Karen          | `karen1.jpg`, `karen2.jpg`, `karen3.jpg`, `karen4.jpg`, `karen5.jpg`, `karen6.jpg`, `karen7.jpg` | I found these on pinterest                                                                                                                                                                                           |
| Mayoi          | `mayoi.jpg`, `mayoi.mp4`                                                                         | [Link](https://wallpapersafari.com/mayoi-hachikuji-wallpapers/) (`.mp4` for dark mode -- edited clips from [source](https://bakemonogatari.fandom.com/wiki/Zoku_Owarimonogatari_Episode_01:_Koyomi_Reverse,_Part_1)) |
| Nadeko         | `nadeko.png`, `nadeko.mp4`, or `nadeko.mkv`                                                      | [Source](https://bakemonogatari.fandom.com/wiki/Caramel_ribbon_cursetard)                                                                                                                                            |
| Ononoki        | `ononoki.png`                                                                                    | `ASSETS` dir                                                                                                                                                                                                         |
| Ougi           | `ougi_light.png`, `ougi_dark.png`                                                                | [Light](https://danbooru.donmai.us/posts/4304364) , [Dark](https://wall.alphacoders.com/big.php?i=887763)                                                                                                            |
| Shinobu        | `shinobu.png`, `kisshot.webp`                                                                    | `shinobu.png` is in the `ASSETS` dir for light mode and `kisshot.webp` (screencap) for dark mode.                                                                                                                    |
| Sodachi        | `sodachi_trn.png`                                                                                | Image must have a transparent background. (included in `ASSETS ` dir)                                                                                                                                                |
| Tsukihi        | `tsukihi.mp4` or `tsukihi.mkv`                                                                   | [Link](https://www.youtube.com/watch?v=mqmV7tTCgXg)                                                                                                                                                                  |

# Installation guide:

## Chrome:

### 1. Download the Files

- Clone or download this repository
- Extract the contents of the ZIP file to a dedicated folder on your computer. Make sure this folder contains the `manifest.json` file directly at its root level.

### 2. Enable Developer Mode

- Open your Chrome or Chromium-based browser (e.g., Brave, Edge, Vivaldi).
- In the address bar, type `chrome://extensions/` and press Enter.
- Look for the **Developer mode** toggle in the top-right corner of the page. Switch it to **On**.

### 3. Load the Extension

- Once Developer mode is enabled, a new toolbar will appear below the address bar. Click the button labeled **Load unpacked**.
- A file picker window will open. Navigate to the folder where you extracted the repository files in Step 1.
- Select the folder and click **Select Folder** (or **Open**).

### 4. Verify Installation

- The extension should now appear in your list of installed extensions.
- If there are any errors in the `manifest.json` file or missing required files, the browser will display an error card on the extension tile. Click the **Details** button on the extension card to view specific error messages if it fails to load.
- Once loaded successfully, you can manage, update, or remove it from the `chrome://extensions/` page. If you modify the code in the folder later, return to this page and click the **Refresh** icon (a circular arrow) on the extension's card to apply your changes.

### Mozilla Firefox

Firefox requires specific configurations for permanent local extension installations.

#### Nightly or Developer Edition (Recommended)

1. Install Firefox Nightly or Firefox Developer Edition.
2. Type `about:config` in the address bar.
3. Search for `extensions.experiments.enabled` and set the value to `true`.
4. Search for `xpinstall.signatures.required` and set the value to `false`.
5. Zip your project files, change the `.zip` extension to `.xpi`, and drag the file into the browser window.

#### Regular Firefox

Installing custom unsigned extensions on standard Firefox releases is a bit more complicated. Read this [guide](https://github.com/snes19xx/surface-dots/tree/main#firefox-customizations) for exact instructions.
