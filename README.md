<div align="center">
    <img src="https://raw.githubusercontent.com/maacpiash/spongemockify/master/meme.jpeg" alt="meme">
</div>
<br>
<h1 align="center">spONgeMocKifY</h1>

<center>
<p align="center">
<a href="https://travis-ci.org/maacpiash/spongemockify" target="_blank"><img src="https://img.shields.io/travis/maacpiash/spongemockify.svg?style=flat-square" alt="Build Status"></a>
<a href="https://codecov.io/gh/maacpiash/spongemockify/" target="_blank"><img src="https://img.shields.io/codecov/c/github/maacpiash/spongemockify.svg?style=flat-square" alt="Codecov Coverage"></a>
<a href="https://www.npmjs.com/package/spongemockify" target="_blank"><img src="https://img.shields.io/npm/v/spongemockify.svg?style=flat-square" alt="npm version"></a>
<a href="https://www.npmjs.com/package/spongemockify" target="_blank"><img src="https://img.shields.io/npm/dt/spongemockify.svg?style=flat-square" alt="npm Downloads"></a>
<a href="https://www.npmjs.com/package/spongemockify" target="_blank"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/spongemockify?style=flat-square"></a>
<a href="https://packagequality.com/#?package=spongemockify" target="_blank"><img src="https://npm.packagequality.com/shield/spongemockify.svg?style=flat-square" alt="Package Quality"></a>
<a href="https://codeclimate.com/github/maacpiash/spongemockify/maintainability" target="_blank"><img src="https://img.shields.io/codeclimate/maintainability/maacpiash/spongemockify?style=flat-square" /></a>
</p>
</center>

This simple Node.js module takes a string as a CLI input and converts it into a [mocking Spongebob meme](https://knowyourmeme.com/memes/mocking-spongebob) style text.

It follows one simple rules: no more than three consecutive same-case (uppercase/lowercase) characters.

## Installation

<table>
  <thead>
    <tr>
      <th rowspan="2">Package Manager</th>
      <th colspan="2">Scope of Installation</th>
    </tr>
    <tr>
      <th>Local</th>
      <th>Global (CLI tool)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NPM</td>
      <td><code>npm i spongemockify</code></td>
      <td><code>npm i -g spongemockify</code></td>
    </tr>
    <tr>
      <td>Yarn</td>
      <td><code>yarn add spongemockify</code></td>
      <td><code>yarn global add spongemockify</code></td>
    </tr>
  </tbody>
</table>

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

Enjoy! <br><br>
<a  target="_blank"
        href="https://twitter.com/intent/tweet?url=https%3A//github.com/maacpiash/spongemockify&amp;text=cHeCK%20tHIs%20Out%21"><img
            src="https://img.shields.io/twitter/url/https/github.com/maacpiash/spongemockify.svg?style=social" alt="Tweet"></a>
            
