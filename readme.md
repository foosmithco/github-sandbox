# Sandbox

Just trying out Github features

<div align="left">
<img alt="NPM" src="https://img.shields.io/npm/v/github-sandbox?style=for-the-badge"> <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/foosmithco/github-sandbox?style=for-the-badge"> <img alt="Codecov" src="https://img.shields.io/codecov/c/github/foosmithco/github-sandbox?style=for-the-badge"> <img alt="Github Issues" src="https://img.shields.io/github/issues-raw/foosmithco/github-sandbox?style=for-the-badge"> <img alt="Github License" src="https://img.shields.io/github/license/foosmithco/github-sandbox?style=for-the-badge">
</div>

## Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas sed tempus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.

Pretium vulputate sapien nec sagittis aliquam malesuada. Ut etiam sit amet nisl purus in mollis. Nisl nisi scelerisque eu ultrices vitae. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.

## Heading 2

Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Placerat in egestas erat imperdiet. Augue interdum velit euismod in pellentesque. Sit amet cursus sit amet dictum sit amet justo donec.

<details>

  <summary>Here's a quick scenario in detail (~ 4 min read).</summary>
<br/>
Let's say your project uses <a href="https://github.com/motdotla/dotenv" target="_blank">dotenv</a> and has the following structure:

```
.
--| .env
--| package.json
--| index.js
+-| sub
|   --| index.js
```

...with the following code-base:

```
# .env
MY_CUSTOM_VAR=some-value
```

```
// package.json
...
"type": "module",
...
```

```
// index.js
import 'dotenv/config';
console.log('I AM ROOT!');
console.log(process.env.MY_CUSTOM_VAR);
```

```
// sub/index.js
import 'dotenv/config';
console.log('I AM BELOW ROOT!');
console.log(process.env.MY_CUSTOM_VAR);
```

When you navigate to your `sub` folder/directory [via `cd sub`], and then run your script [via `node index.js`], you may be suprised to see that the console output for your `.env` variable is `undefined`.

The reason for this is because *dotenv* [by default] uses the current working directory to find your `.env` file, and now it can't find the file because you're one directory below.

You can change your `.env` code to this:

```
// sub/index.js
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
...
```

And everything should work perfectly now, right?! That is, until you navigate back to your project's home/root folder and do this:

```
node sub/index.js
```

Now you get the same result as before [`undefined`], because the `path` that you provided *dotenv* is now being resolved based on your current working directory, so *dotenv* is looking in the directory above the current one [`../<your-root-directory>`] for a `.env` file.

eitherFile helps to *resolve* issues like this. With eitherFile, all you need to do is change your code to this:

```
// sub/index.js
import eitherFile from 'eitherfile';
import dotenv from 'dotenv';
dotenv.config({path: eitherFile('.env', {up: 1})});
...
```

And eitherFile will do either of the following:

1. Look in the current working directory for a `.env` file then provide its full path if found;
2. If no file is found, go up the directory tree [once] and look in that directory then provide its full path if found [`null` otherwise];

In other words, eitherFile gives you either [the file path of] the `.env` in your current working directory, or the `.env` in the directory above.

This way, regardless of the directory in which you run/invoke your *node* process [`./` or `./sub`], the file is found, and your script runs without an issue.

Of course, you could always provide an absolute path to your [`.env`] file, but sometimes these paths can be quite long and a hassle to maintain if you've made multiple references and a directory names change.

</details>