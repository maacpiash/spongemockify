<h1 align="center">spONgeMocKifY</h1>

<p align="center">
    <a href="https://travis-ci.org/maacpiash/spongemockify" target="_blank"><img
            src="https://travis-ci.org/maacpiash/spongemockify.svg?branch=master" alt="Build Status"></a>
    <a href="https://codecov.io/gh/maacpiash/spongemockify/" target="_blank"><img
            src="https://img.shields.io/codecov/c/github/maacpiash/spongemockify.svg"
            alt="Codecov Coverage"></a>
    <a href="https://www.npmjs.com/package/spongemockify" target="_blank"><img src="https://badge.fury.io/js/spongemockify.svg"
            alt="npm version"></a>
    <a href="https://david-dm.org/maacpiash/spongemockify" target="_blank"><img src="https://img.shields.io/david/maacpiash/spongemockify.svg"
            alt="Dependency status"></a>
    <a href="https://www.npmjs.com/package/spongemockify" target="_blank"><img src="https://img.shields.io/npm/dt/spongemockify.svg"
            alt="npm Downloads"></a>
    <a href="https://packagequality.com/#?package=spongemockify" target="_blank"><img
            src="https://npm.packagequality.com/shield/spongemockify.svg" alt="Package Quality"></a><br>
    <a href="https://github.com/maacpiash/spongemockify/blob/master/LICENSE" target="_blank"><img
            src="https://img.shields.io/github/license/maacpiash/spongemockify.svg" alt="License"></a>
    <a href="https://github.com/maacpiash/spongemockify/issues" target="_blank"><img
            src="https://img.shields.io/github/issues/maacpiash/spongemockify.svg" alt="Open issues"></a>
    <a href="https://github.com/maacpiash/spongemockify/graphs/contributors" target="_blank"><img
            src="https://img.shields.io/github/contributors/maacpiash/spongemockify.svg" alt="Contributors"></a>
    <a href="https://github.com/maacpiash/spongemockify/pulls" target="_blank"><img
            src="https://img.shields.io/badge/PR-welcome-green.svg" alt="PR welcome"></a>
    <img src="https://img.shields.io/github/languages/top/maacpiash/spONgeMocKifY.svg?color=green&amp;style=flat"
        alt="GitHub top language">
    <a  target="_blank"
        href="https://twitter.com/intent/tweet?url=https%3A//github.com/maacpiash/spongemockify&amp;text=cHeCK%20tHIs%20Out%21"><img
            src="https://img.shields.io/badge/share-twitter-blue.svg" alt="Tweet"></a>
</p>

This simple Node.js module takes a string as a CLI input and converts it into a [mocking Spongebob meme](https://knowyourmeme.com/memes/mocking-spongebob) style text.

It follows one simple rules: no more than three consecutive same-case (uppercase/lowercase) characters.

## Installation

#### As a Node module
A simple `npm install spongemockify` inside your project folder should do the job.

#### As a CLI tool
From any folder, execute `npm install -g spongemockify` command. Superuser access may be needed in Unix/Linux systems.

## Usage
As a CLI tool:
```bash
spongemockify <string>
```

As a package inside a Node.js project:
```JavaScript
const sp = require('spongemockify/lib');
/* Code */
sp.spongemockify(str);
```

## Acknowledgement

Special thanks to my good buddy and a prominent JS junkie [Shawon Ashraf](https://github.com/ShawonAshraf) who spent his precious time (on his birthday!) to kill some bugs and make the module usable as a CLI command.
<br><br>

Enjoy!
