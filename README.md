# coderbyte

Coding and algorithm challenges completed on coderbyte.com

> Coderbyte is a web application built to help you practice programming and improve your coding skills.

I am currently ranked [#5](https://www.coderbyte.com/profile/bhanson) on the website out of 200,000+ users.

## Why does this repository exist?

The purpose of this repository is to practice integrating several elements of software development. These include, but are not limited to:

-   Algorithms implementation
-   Git workflow
-   Writing unit tests using Jest

Secondly, I have used this project to get used to using several other supplemental tools:

-   ESLint
-   Prettier
-   JSDoc

I am using the practice I gain here in order to transition into behavior-driven development.

## How to run the unit tests

1.  Clone this repository

```
git clone https://github.com/bradhanson/coderbyte
cd coderbyte
```

2.  Install dependencies (just `jest`)

```
npm install
```

3.  Run the tests!

```
npm test
```

4.  Run test coverage report

```
npm run coverage
```

## What is `generate.js`?

`generate.js` is a script used to generate blank Coderbyte file templates. It handles the boilerplate setup of a new challenge. It converts the underscored file name into camelCase functions within the files.

```
cd coderbyte
node generate.js easy/ab_check
```

Will generate template files:

```
easy/ab_check.js
easy/ab_check.test.js
```

You can also run it from the current directory:

```
cd coderbyte/easy
node ../generate.js ab_check

// ab_check.js
// ab_check.test.js
```
