# Master Password

Use a master password to generate unique passwords for other purposes. I have a
problem that I use the same password to multiple web services. Even services I
don't use often can have the same password as my email. If one of these services
is compromised I would need to change passwords on most of my other services.

My idea is a password manager that does not store any passwords. It's simply an
algorithm wrapper that uses different strategies to create passwords. The neat
thing here is that you can create your own algorithms. Yes, plural. You can have
multiple local algorithms on your machine that generates a password based on
your seeds. In that way it can be very hard for an intruder to find your
password, even if you have only one master password, because the algorithm that
creates your password is not always the same.

## Main features:

* Generate passwords based on a master password and other seeds
* Develop your own algorithms to create the passwords
* Create new passwords for the same service without changing your master
  password

All these features are available through the cli. Have a quick look:

```bash
# generate password

$ mspw -n "Natanael Log" -a gmail
$ master password:
$ password copied to clipboard

# init default name

$ mspw init
$ name: Natanael Log
$ "Natanael Log" added as default name

# create code template for a custom algorithm

$ mspw create my-algorithm.js
$ emacs my-algorithm.js

# add custom algorithm

$ cd /path/to/algorithm
$ mspw add my-algorithm.js
$ testing "my-algorithm.js"...
$ "my-algorithm.js" added to list of custom algorithms
```

## Installation

Install with [npm](https://www.npmjs.com): `npm install -g master-password`

## Developer

Note, if you want to develop this application do **not** install the package via
npm. Instead clone down this repo and continue from there.

Use `npm link` inside the folder and npm will add the `mspw` command to the
global path. Depending on npm's permission level on your machine you might have
to `sudo`. One way of solving weird npm-bugs is to remove the package globally
and link it again: `npm remove master-password -g && npm link`.

* `npm run build` - Use this to compile the ES6 code and put it in `/dist`. This
  must be done before the linked `mspw` command is updated as well.
* `npm test` - Use to run tests. [Mocha](https://mochajs.org/) is used and all
  features of it is included here. E.g. `npm test -- -w` will run tests
  automatically on file changes.
