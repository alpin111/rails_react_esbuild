# Ruby on Rails + React + esbuild
Setup for Ruby on Rails with React &amp; esbuild



```
rails new -j esbuild rails_react_esbuild
cd rails_react_esbuild
```

Gemfile add:
```
gem 'jsbundling-rails'
gem 'foreman'
```

Run 
```
./bin/bundle install
./bin/rails javascript:install:esbuild

yarn add react react-dom
yarn add esbuild esbuild-loader --dev

rails g controller Root index
```

app/views/root/index.html.erb:
```
<div id="root">
```
config/routes.rb:

```
Rails.application.routes.draw do
  root 'root#index'
end
```


app/javascript/application.js:

```
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<h1>Hello World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
```


Add `--loader:.js=jsx` to the build script in your package.json at the very end:
```
 "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --loader:.js=jsx"
  },
```

Start:
```
./bin/dev
```
