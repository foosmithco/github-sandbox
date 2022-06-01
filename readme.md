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

### Options

The *Options* argument has the following properties:

- **base**
- **up**
- **down**
- **contains**
- **debug**

#### base

A directory that will serve as the starting point for file searches.

|---|---|
| **Type** | *String* |


**Example**:

```
const file_path = eitherFile('.env', {base: '~/top-folder/my-project'});
/**
  * This will look for a '.env' file from 'my-project' directory
  * under the 'top-folder' directory under the home directory
  */
```
Example:
```
const file_path = eitherFile('.env', {base: '../my-project'});
/**
  * This will look for a '.env' file from a 'my-project' directory
  * relative to where you run/invoke the node process
  */
```

**Rules:**
- This directory can have absolute or relative path
- If the directory has a relative path, this path will be normalized to an absolute path [based on the current working directory]
