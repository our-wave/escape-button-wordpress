# Contribute to Our Wave Projects

The Our Wave Escape Button is an open-source project administered by [the Our Wave team](https://www.ourwave.org/who-we-are). We appreciate your interest and efforts to contribute to Our Wave projects.

All efforts to contribute are highly appreciated, we recommend you talk to a maintainer prior to spending a lot of time making a pull request that may not align with the project roadmap.

## Open Development & Community Driven

The Our Wave Escape Button is open-source under the [MIT license](https://github.com/our-wave/escape-button-wordpress/blob/master/LICENSE.md). All the work done is available on GitHub.

The core team and the contributors send pull requests which go through the same validation process.

## Feature Requests

Feature Requests by the community are highly encouraged. Please feel free to submit a [feature request issue](https://github.com/our-wave/escape-button-wordpress/issues) or to upvote 👍 [an existing feature request issue](https://github.com/our-wave/escape-button-wordpress/issues) in GitHub Issues.

## Code of Conduct

This project and everyone participating in it are governed by the [Our Wave Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please read the [full text](CODE_OF_CONDUCT.md) so that you can read which actions may or may not be tolerated.

## Bugs

We are using [GitHub Issues](https://github.com/our-wave/escape-button-wordpress/issues) to manage our public bugs. We keep a close eye on this so before filing a new issue, try to make sure the problem does not already exist.

---

## Before Submitting a Pull Request

The core team will review your pull request and will either merge it, request changes to it, or close it.

**Before submitting your pull request** make sure the following requirements are fulfilled:

-   Fork the repository and create your branch from `master`.
-   Run `npm install` in the repository root.
-   If you’ve fixed a bug or added code that should be tested, add the tests and then link the corresponding issue in either your commit or your PR!
-   Make sure your code lints (`npm lint`).

## Contribution Prerequisites

-   You have [Node](https://nodejs.org/en/) at v10.x.x+ and [npm](https://www.npmjs.com/).
-   You are familiar with Git.

## Development Workflow

To facilitate the contribution, we have drastically reduced the amount of commands necessary to install the entire development environment.

First of all, you need to check if you're using the required versions of Node.js and npm, as mentioned above.

Then, please follow the instructions below:

#### 1. Fork the [repository](https://github.com/our-wave/escape-button-wordpress)

[Go to the repository](https://github.com/our-wave/escape-button-wordpress) and fork it to your own GitHub account.

#### 2. Clone from your repository

```bash
git clone git@github.com:YOUR_USERNAME/escape-button-wordpress.git
```

#### 3. Install the dependencies

Go to the root of the repository.

```bash
cd /escape-button-wordpress && npm install
```

#### 4. Build the Escape Button

```bash
npm run build
```

**Awesome! You are now able to contribute to The Our Wave Escape Button.**

#### 5. Available commands

-   `npm run build` builds the webpack production version.
-   `npm install` installs the dependencies.
-   `npm run lint` lints the codebase.
-   `npm run lint:code` lints the javascript.
-   `npm run lint:css` lints the css.
-   `npm run lint:fix` lints the codebase and attempts to fix issues.
-   `npm run format` attempts to fix prettier formatting issues.
-   `npm run prettier` audits the codebase for prettier formatting issues.

## Miscellaneous

### Reporting an issue

Before submitting an issue you need to make sure:

-   You are experiencing a concrete technical issue with the Our Wave Escape Button.
-   You have already searched for related [issues](https://github.com/our-wave/escape-button-wordpress/issues), and found none open (if you found a related _closed_ issue, please link to it from your post).
-   You are not asking a question about how to use the Our Wave Escape Button or about whether or not the Our Wave Escape Button has a certain feature. For general help using the Our Wave Escape Button, you may:
    -   Ask a question on [StackOverflow](http://stackoverflow.com/questions/tagged/our-wave).
-   Your issue title is concise, on-topic and polite.
-   You can and do provide steps to reproduce your issue.
-   You have tried all the following (if relevant) and your issue remains:
    -   Make sure you have the right application started.
    -   Make sure the [issue template](.github/ISSUE_TEMPLATE) is respected.
    -   Make sure your issue body is readable and [well formatted](https://guides.github.com/features/mastering-markdown).
    -   Make sure the application you are using to reproduce the issue has a clean `node_modules` directory, meaning:
        -   no dependencies are linked (e.g. you haven't run `npm link`)
        -   that you haven't made any inline changes to files in the `node_modules` folder
        -   that you don't have any weird global dependency loops. The easiest way to double-check any of the above, if you aren't sure, is to run: `$ rm -rf node_modules && npm cache clear && npm install`.
