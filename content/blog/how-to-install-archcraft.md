---
title: How to install Archcraft
description: This is a quick introduction on how to get started with Nuxt 3.
publishDate: 05-08-2023
cover: how-to-install-archcraft.png
tags: [Archcraft, Arch Linux]

---

# How to install Archcraft

![Thumbnail](/images/blog/how-to-install-archcraft.png)

## What is Archcraft?

Archcraft is just another Linux distribution, made on top of Arch Linux. It uses window managers and lightweight applications, which makes it super fast. With pre-configured settings, Archcraft provides you the best out of the box window manager experience.

### Features

#### # Minimal

Archcraft is very minimal and lightweight. It can run under 500Mb of memory as it only uses window managers and some lightweight applications.

#### # Stunning

Flat and pastel colors, the consistency among all the UI elements, And various themes make Archcraft look very clean, minimal and Stunning.

#### # Powerful

With latest softwares and built-in support for AUR, and being lightweight, Archcraft gives you the power to do whatever you want on your Linux PC.

### Download Archcraft

You can download Archcraft from either Sourceforge, Google Drive or Mega Cloud.

* **[Sourceforge](https://sourceforge.net/projects/archcraft/files/latest/download)**
* **[Google Drive](https://drive.google.com/drive/folders/1iI4OrdZ3gMHKbRzBR6BpN4iFOp595pJw?usp=share_link)**
* **[Mega](about:blank)**

### Verify the ISO

After downloading, you should verify the authenticity of the ISO.

1. Assuming you have downloaded **gpg signature** and **sha256sum** files along with ISO and they are in the same directory as ISO.
2. Open the terminal and verify the details of the key on keyserver
    > $ gpg --keyserver hkps://keys.gnupg.net --recv-keys 7DC81F73
3. Verify the gpg signature by running...
4. Finally, Verify the sha256sum checksum by running...

***

### Create A Bootable USB

#### Rufus (Windows)

Simply select the Archcraft ISO, the USB drive you want to create the bootable Archcraft onto and click START.

1. For Rufus version **≥ 3.0** select GPT from the Partition scheme drop-down menu. After clicking START you will get the mode selection dialog, select DD Image mode.
2. For Rufus version **< 3.0** select DD Image mode from the drop-down menu on the bottom.

### Install Archcraft

I'm assuming that you have already created a bootable USB with Archcraft ISO, boot system with it and select Boot Archcraft. Launch the installer via either welcome app or menu.

On the welcome screen, Select the installer language and click on **Next**

1. Select your Region, Time Zone, System Locale etc and click on Next If you're connected to the internet, this will be adjusted automatically
2. Select your Keyboard Layout and click on Next By default, the keyboard layout is automatically adjusted according to selected system locale

#### Partitioning

Let's create a Partition table first. For UEFI, use **GPT** partition table and for BIOS, use **MBR**.

Partition table is created and you can see the Free Space on your disk. Now, Click on Create button to create partitions.

For this installation, We are going to create three partition :

1. boot : **/boot/efi**

    Since in our case, the disk is empty, Let's make an **EFI partition**. Created a **500MB** partition with **fat32** file system and mounted it to **/boot/efi** and set the boot flag.
2. root : **/**

    Now create a **root partition**. Again, Select Free Space and Click on Create. Select the size of your root partition, file system (If you don't care, go with ext4 fs). Mount it to **/** and set the flag to root.
3. home : **/home**

    And at last, create a **home partition** and mount that to **/home**.

Here's how our partitions look for this installation. When you sure everything is okay, Click on **Next**

#### Finalization

Create a user account for you, this is a simple form, fill it up and click on **Next**

Here's the summary for this installation, Whatever changes you have made and what the installer is going to do now. Have a look at that and when you're satisfied, click on **Next** to being the Installation

Now, The actual installation begins, It'll take a few minutes so in the meantime you can stare at the slides or... I don't know, go get a coffee or something.

When it's done, Check that **Reboot now** box to reboot the system instantly.

**Well, That’s it! Archcraft is installed on your system. Enjoy!**