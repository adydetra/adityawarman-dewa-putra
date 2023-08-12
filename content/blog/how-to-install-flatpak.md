---
title: How to install flatpak
description: This is my very first blog post and I'm so excited to share it with you!
publishDate: 05-08-2023
cover: how-to-install-flatpak.png
tags: [Linux, Flatpak]
---

# How to install flatpak

![Thumbnail](/images/blog/how-to-install-flatpak.png)

## What is Flatpak?

Flatpak is a system for building, distributing, and running sandboxed desktop applications on Linux.

### Arch Quick Setup

#### Install Flatpak

To install Flatpak, run the following in a terminal:

> sudo pacman -S flatpak

#### Restart

To complete setup, restart your system. Now all you have to do is install some apps!

### Ubuntu Quick Setup 

#### Install Flatpak

To install Flatpak on Ubuntu 18.10 (Cosmic Cuttlefish) or later, simply run:

> sudo apt install flatpak

With older Ubuntu versions, the official Flatpak PPA is the recommended way to install Flatpak. To install it, run the following in a terminal:

> sudo add-apt-repository ppa:flatpak/stable

> sudo apt update

> sudo apt install flatpak

#### Install the Software Flatpak plugin

The Flatpak plugin for the Software app makes it possible to install apps without needing the command line. To install, run:

> sudo apt install gnome-software-plugin-flatpak

#### Add the Flathub repository

Flathub is the best place to get Flatpak apps. To enable it, run:

> flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

#### Restart

To complete setup, restart your system. Now all you have to do is install some apps!