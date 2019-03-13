# SpongeMockify


[![Build Status](https://travis-ci.org/maacpiash/spongemockify.svg?branch=master)](https://travis-ci.org/maacpiash/spongemockify)
[![npm version](https://badge.fury.io/js/spongemockify.svg)](https://www.npmjs.com/package/spongemockify)
[![npm Downloads](https://img.shields.io/npm/dt/spongemockify.svg)](https://www.npmjs.com/package/spongemockify)
[![License](https://img.shields.io/github/license/maacpiash/spongemockify.svg)](https://github.com/maacpiash/spongemockify/blob/master/LICENSE)
[![Open issues](https://img.shields.io/github/issues/maacpiash/spongemockify.svg)](https://github.com/maacpiash/spongemockify/issues)
[![Contributors](https://img.shields.io/github/contributors/maacpiash/spongemockify.svg)](https://github.com/maacpiash/spongemockify/graphs/contributors)
[![PR welcome](https://img.shields.io/badge/PR-welcome-green.svg)](https://github.com/maacpiash/spongemockify/pulls)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A//github.com/maacpiash/spongemockify&text=cHeCK%20tHIs%20Out%21)

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
