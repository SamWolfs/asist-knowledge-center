---
title: "Verdaccio"
metaTitle: "Get started using Verdaccio, a private npm proxy and package registry"
metaDescription: "Get started using Verdaccio, a private npm proxy and package registry"
---

## What is Verdaccio

[Verdaccio](https://verdaccio.org/) is a private [npm](https://www.npmjs.com/) proxy and package registry. It allows us to publish and install our own JavaScript/TypeScript packages while still being able to access the public npm registry.

## Why do we need it

One of the pitfalls of OSS (Open Source Software) is that packages are maintained by external developers, often as (unpaid) side projects. This means that in some cases development and bugfixing can take longer than we'd like. Verdaccio allows us to either temporarily or permanently take 'ownership' of the package and continue development while waiting for bugfixes to be applied to the official, public package.

Verdaccio also gives us the opportunity to pre-package existing, reusable code and use it throughout JavaScript/TypeScript projects.

## Installation

### Windows

1. Install [Chocolatey](https://chocolatey.org/)
2. Install Python using Chocolatey `choco install python`
3. Check [Verdaccio](https://verdaccio.org/docs/en/installation) for other prerequisites
4. `npm install -g verdaccio` to install Verdaccio
5. (optional) Add [https](https://verdaccio.org/docs/en/configuration.html#https) support
6. Install NSSM using Chocolatey `choco install nssm`
7. `nssm install verdaccio` to create a new Windows Service
    - Path: `<path-to-verdaccio.cmd>`
    - Working Dir: `<path-to-directory-with-config>`

## Usage

### Publishing a package

1. Run `npm adduser --registry <registry-location>` on client to register your user
2. Run `npm version <version>` to set your package version
3. Build your package
4. Run `npm publish ./dist/ --registry <registry-location>` to publish

### Setting up the proxy for local development

1. Run `npm set registry <registry-location>`
2. Install packages using npm as you would normally!

### Setting up the proxy for build server

1. Run `npm set registry <registry-location>`
2. Install packages using npm as you would normally!
