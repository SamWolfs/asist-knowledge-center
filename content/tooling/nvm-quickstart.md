---
title: "nvm (Node Version Manager) Quickstart"
metaTitle: "Get started using Node Version Manager and upgrade your Node.js development environment"
metaDescription: "Get started using Node Version Manager and upgrade your Node.js development environment"
---

## What is nvm

Node version manager is a... Node version manager, it manages node versions! What did you expect?!

## Installation

Keep in mind, these are easy/straight-forward installations. If you want a bit more control over the installation check out [MacOS/Linux](https://github.com/nvm-sh/nvm) or [Windows](https://github.com/coreybutler/nvm-windows) and make your own, educated decision.

### Windows

1. Install **Chocolatey** using an elevated powershell:

    ```ps1
    Set-ExecutionPolicy Bypass -Scope Process -Force;
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

2. Chocolatey is a Windows Package Manager, similar to how Linux distros have apt-get, pacman, ...
3. Install nvm through Chocolatey: `choco install nvm`
4. You also gain a powershell superpower `refreshenv` which allows your to refresh your environment variables without having to restart your computer!

### MacOS/Linux

1. Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
2. Laugh at Windows users because your installation is way easier ;)

## Usage

1. Run `nvm install <version>` to install a specific node.js version; **latest** is a special version number and will install the latest node.js
2. Run `nvm use <version>` to start using an installed node.js version; keep in mind that globally installed packages will be unique to each version. So if you decide to swap node version at some point, you'll have to reinstall all of your globally installed packages.
3. If for some reason or another you wish to stop using nvm and go back to managing your node version yourself, go see a doctor. Also `nvm on` turns the version manager on, `nvm off` turns it off.
