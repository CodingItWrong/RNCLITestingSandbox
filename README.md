# React Native CLI Testing Sandbox

This is an example React Native CLI project set up to play around with Detox and RNTL testing. There is a sample test for each that is configured to run locally and on GitHub Actions.

See the [history of the GitHub Actions runs](https://github.com/CodingItWrong/RNCLITestingSandbox/actions).

## Requirements

- [Node](https://nodejs.org)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)
- [Ruby](https://www.ruby-lang.org/)
- [Cocoapods](https://cocoapods.org/)
- [Android Studio](https://developer.android.com/studio) and/or [Xcode](https://developer.apple.com/xcode/)

## Installation

- Clone the repo
- Run `yarn install`
- Run `cd ios && pod install`

Dependencies are locked with `yarn.lock`; please use `yarn` rather than `npm` for installing.

## Running

- In one terminal, run `yarn start`
- In another terminal, run `yarn android` or `yarn ios`

## E2E Tests

- Run `detox build -c ios.sim.debug` (only needs to be run once per native code changes)
- Run `detox test -c ios.sim.debug`

## License

MIT
