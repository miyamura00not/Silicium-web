<div align="center">

```
███████╗██╗██╗     ██╗ ██████╗██╗██╗   ██╗███╗   ███╗
██╔════╝██║██║     ██║██╔════╝██║██║   ██║████╗ ████║
███████╗██║██║     ██║██║     ██║██║   ██║██╔████╔██║
╚════██║██║██║     ██║██║     ██║██║   ██║██║╚██╔╝██║
███████║██║███████╗██║╚██████╗██║╚██████╔╝██║ ╚═╝ ██║
╚══════╝╚═╝╚══════╝╚═╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝
```

**A precision-built Roblox script executor.**  
Minimal interface. Instant injection. Zero bloat.

[![Release](https://img.shields.io/github/v/release/yourusername/silicium?color=F5820A&labelColor=0D0A08&style=flat-square)](https://github.com/yourusername/silicium/releases/latest)
[![Platform](https://img.shields.io/badge/platform-Windows%20x64-F5820A?labelColor=0D0A08&style=flat-square)](https://github.com/yourusername/silicium/releases/latest)
[![Website](https://img.shields.io/badge/website-getsilicium.netlify.app-F5820A?labelColor=0D0A08&style=flat-square)](https://getsilicium.netlify.app)

</div>

---

## Overview

Silicium is a WPF-based Roblox script executor built on the [Velocity API](https://realvelocity.xyz). It features a frameless dark UI with a Lua-aware code editor, one-click injection, and automatic backend updates — all in a single lightweight executable.

---

## Features

- **Instant injection** — attaches to `RobloxPlayerBeta.exe` in one click
- **AvalonEdit code editor** — full Lua syntax highlighting with Waylay orange theme
- **Auto-update** — downloads `Bin/` backend files from Velocity CDN on first launch
- **Encrypted IPC** — scripts sent over AES-encrypted named pipes
- **In-game notifications** — customizable Roblox `SendNotification` on inject
- **Minimal UI** — frameless, transparent WPF window with custom chrome
- **Glitched S logo** — because why not

---

## Download

Grab the latest release from the [**Releases**](https://github.com/yourusername/silicium/releases/latest) page.

Extract the zip anywhere and run `Silicium.exe`. No installer required.

> **First launch** — Silicium will automatically download required backend files from Velocity's CDN into a `Bin/` folder next to the exe. This requires an internet connection on first run.

---

## Usage

1. Launch `Silicium.exe`
2. Open Roblox and join a game
3. Click **Inject** (wait for the in-game notification)
4. Paste your script into the editor
5. Click **Execute**

---

## Building from Source

**Requirements**
- .NET 8.0 SDK
- Windows x64
- Visual Studio 2022 or `dotnet CLI`

```bash
git clone https://github.com/yourusername/silicium.git
cd silicium
dotnet build -c Release
```

Place `VelocityAPI.dll` in a `libs/` folder next to the `.csproj` before building.

The output exe will be in `bin/x64/Release/net8.0-windows/`.

---

## Customizing the In-Game Notification

Open `MainWindow.xaml.cs` and edit the constants at the top:

```csharp
private const string NotifTitle    = "Silicium";
private const string NotifMessage  = "Injected successfully";
private const string NotifDuration = "3";  // seconds
```

---

## Project Structure

```
silicium/
├── App.xaml
├── App.xaml.cs
├── MainWindow.xaml          # UI layout — Waylay orange theme
├── MainWindow.xaml.cs       # Logic — inject, execute, editor setup
├── TemplateUi.csproj
├── icon.ico
└── libs/
    └── VelocityAPI.dll
```

---

## Tech Stack

| Component | Details |
|-----------|---------|
| Framework | .NET 8 WPF |
| Editor | AvalonEdit 6.2.0.78 |
| Executor API | VelocityAPI (Velocity) |
| IPC | Named pipes + AES encryption |
| UI | Custom frameless WPF + XAML |

---

## Disclaimer

Silicium is built for **educational purposes only**. Using script executors may violate Roblox's Terms of Service. Use at your own risk.

---

<div align="center">
<sub>Built with 🔥 · <a href="https://getsilicium.netlify.app">getsilicium.netlify.app</a></sub>
</div>
