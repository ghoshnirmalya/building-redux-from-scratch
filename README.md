# My Redux

[![Build Status](https://travis-ci.org/ghoshnirmalya/my-redux.svg?branch=master)](https://travis-ci.org/ghoshnirmalya/my-redux) [![Greenkeeper badge](https://badges.greenkeeper.io/ghoshnirmalya/my-redux.svg)](https://greenkeeper.io/)

This app demonstrates how you can build your own version of [Redux](https://redux.js.org/). [my-redux-example](https://github.com/ghoshnirmalya/my-redux-example) is an app which is using this package to maintain it's state. You can view the whole implementation in [this file](https://github.com/ghoshnirmalya/my-redux-example/blob/master/src/App.js).

<img src="https://user-images.githubusercontent.com/6391763/46587617-a5399480-caac-11e8-9b34-3737b495c52b.png" alt="Logo">

## Example usage

#### Step 1: Import the createStore function from my-redux into your app

```js
import createStore from "my-redux";
```

#### Step 2: Create a reducer function

```js
const reducer = (state = initialState, action) =>
  action.type === "INCREMENT"
    ? { count: state.count + action.payload.count }
    : state;
```

#### Step 3: Pass that reducer function to the createStore function along with the initialState of your app

```js
this.store = createStore(reducer, { count: 0 });
```

#### Step 4: Dispatch an action to update your store

```js
this.store.dispatch({
  type: "INCREMENT",
  payload: {
    count: 1
  }
});
```

You store should now reflect the updated state. You can verify that by logging the state of your store:

```js
console.log(this.store.getState());
```

[my-redux-example](https://github.com/ghoshnirmalya/my-redux-example) is an app which is using this package to maintain it's state. You can view the whole implementation in [this file](https://github.com/ghoshnirmalya/my-redux-example/blob/master/src/App.js).

## Development

```sh
$ git clone https://github.com/ghoshnirmalya/my-redux
$ cd my-redux
$ yarn install
```

#### Running the tests

```sh
$ yarn test
```

#### Getting the test coverage

```sh
$ yarn coverage
```

#### Running the linter

```sh
$ yarn lint
```

#### Building the code

```sh
$ yarn build
```

#### Publish

```sh
$ yarn version patch|minor|major
$ yarn publish
```

It'll automatically run `test`, `lint`, `docs`, `build` and generate CHANGELOG.md file.

## License

MIT © [Nirmalya Ghosh](https://github.com/ghoshnirmalya)
