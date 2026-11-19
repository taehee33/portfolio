---
title: "MagicMagicTrack — per-trackpad settings for macOS"
summary: "Give your MacBook's built-in trackpad and Magic Trackpad different speed, scroll and click settings — and use the Magic Trackpad rotated 90° or 180°."
stack: ["Swift", "SwiftUI", "AppKit", "IOKit", "MultitouchSupport", "Xcode"]
order: 1
github: "https://github.com/taehee33/magictrack202603"
download: "https://github.com/taehee33/magictrack202603/releases/latest"
status: "v1.4.1 on GitHub Releases"
---

## Problem

macOS applies one set of settings to every trackpad. If you use two trackpads of different sizes and positions, one of them always feels wrong — and there's no way to use a Magic Trackpad turned sideways.

## Solution

- Detects which trackpad your fingers are on in real time and switches settings automatically (or lock a mode with ⌃⌥M)
- When rotated 90°, remaps pointer movement, clicks, drags, scrolling and swipe gestures
- Presets, per-app rules, a menu bar status item, Korean and English UI
- Never changes your system settings — overrides apply only while the app runs
- Unit tests, DMG packaging and automated self-signed releases

## What I learned

Apps built on private APIs can't ship on the App Store and can break with OS updates. I documented those limits openly and designed a fallback to fixed mode when a feature stops working.
