---
title: How to install NPM in Arch Linux
description: This is a quick introduction on how to get started with Nuxt 3.
publishDate: 05-08-2023
cover: how-to-install-npm-in-arch-linux.png
tags: [Arch Linux, NPM, Node Js]
---

# How to install NPM in Arch Linux

![Thumbnail](/images/blog/how-to-install-npm-in-arch-linux.png)

## What is Node Js?

Nodejs is a Javascript Runtime Environment which has a lot of libraries. It uses Google's V8 Engine to execute JS scripts in an operating system environment (not a browser). Due to JavaScript's own event-driven, non-blocking I/O model, nodejs is well-suited for real-time web applications.

## What is npm?

NPM stands for Node Package Manager. It's a library and registry for JavaScript software packages. NPM also has command-line tools to help you install the different packages and manage their dependencies.

### Install Node Js

> sudo pacman -Sy nodejs

With the above command you will get the latest version of nodejs.

> node -v

### Install NPM

The installation method is very easy, we do it with Pacman.

> sudo pacman -S npm

### Update NPM

Of course with the above command we will get the latest version of npm. But npm development itself is much faster and more active than nodejs. 

So we need to make sure that our npm is on the really latest version.

How to update we can do it with the following command:

> npm install npm@latest -g

### Error NPM Permission

You may get EACCES errors when installing nodejs modules globally. That means you do not have access rights while installing the module. You can get around this by using the sudo command, but I don't recommend that method.

Why can there be an error? Because by default when we install npm on arch linux, npm will install all modules (global ones) in the /usr/lib/node_modules/npm directory which requires root access. 

So the coolest solution to this problem is to change the npm default directory for storing global modules.

### It's easy. First, create a folder to store nodejs modules.

For example I will create a .node_modules folder in my home folder. So I did the following command:

> mkdir ~/.node_modules

### Set npm to use that folder as the default directory.

> npm config set prefix '~/.node_modules'

### Make the above directory a global directory.

The trick, you first open the file in the location ~/.bashrc . Or if the file doesn't exist, you can create one.

Then add the following line at the very bottom:

> export PATH="$HOME/.node_modules/bin:$PATH"

### Update the system variables that we created earlier.

The method is very easy. The first you can close the terminal and then open it again.
