---
title: "What is React"
metaTitle: "React.js Basics and why you should use it?"
metaDescription: "React.js Basics and why you should use it?"
---

React is an Open Source JavaScript library, developed by Facebook, for building modular user interfaces based on the front-end component architecture.

## How is React different from other frameworks

React is a library, whereas Angular, Vue, Svelte and others are frameworks. Frameworks generally contain more base functionality and as such will have larger vendor bundles (although Tree Shaking severely limits the amount of unused code). This lightweight approach also makes it easier to integrate existing JavaScript packages in your React apps, whereas frameworks might require some minor configuration.

React has a stronger focus on writing JavaScript as opposed to writing HTML. Angular and Vue for example, power up their HTML with for-loops (`*ngFor`, `v-for`) and conditionals (`*ngIf`, `v-if`) through JavaScript. React powers up their JavaScript through an HTML-like syntax called JSX, which can be used alongside regular JavaScript.

For-loop in Angular:

```html
<div *ngFor="let i = 0; i < 10; i++"> i </div>
```

For-loop in JSX:

```js
{{
  Array(10).keys().map(key => {
    return <div> key </div>
  });
}}
```

## React Fundamentals

### JSX

The most notable part of React is probably the HTML-like syntax called JSX. It is a syntax extension to JavaScript and is used to produce React elements. The following pieces of code are the same:

JSX

```js
const helloWorld = (
  <div className="greeting">
    <h1>Hello World!</h1>
    <p>Time to learn some React!</p>
  </div>
);
```

JavaScript

```js
const helloWorld = React.createElement('div', { className: 'greeting' },
  React.createElement('h1', 'Hello World!'),
  React.createElement('p', 'Time to learn some React!')
);
```

During compilation, the JSX syntax is compiled down to regular JavaScript calls. This allows for a lot of flexibility when it comes to combining visual elements and their underlying logic.

### One-way Data Binding

React only supports One-way data binding, where parent components can pass data to child components but not the other way around. This results in a unidirectional data flow, which simplifies the code (data is passed and modified by the parent) and reduces concurrency issues (both parent and child attempting to modify the data).

Every React component has an optional `props` object that can be accessed through the component constructor.

```js
const MyComponent = (props) => {
  return <div>{props.text}</div>
};
```

Curly braces can be used to insert JavaScript expressions in the JSX (`{props.text}`). The props can then be passed to `MyComponent` as if it was an HTML-attribute: `<MyComponent text="Hello World!" />`.

### Components

React encourages a component-based architecture to allow reuse of UI elements. Take for example a Social Media Button:

```js
const SocialMediaButton = (button) => {
  return (
    <div className={styles.container}>
        <a href={button.link}><FontAwesomeIcon icon={button.icon}/></a>
    </div>
  );
};
```

Which can be used as follows:

```js
const page = (
  <div className="socialsContainer">
    <SocialMediaButton link="www.facebook.com" icon="facebook" />
    <SocialMediaButton link="www.twitter.com" icon="twitter" />
    <SocialMediaButton link="www.instagram.com" icon="instagram" />
  </div>
);
```

While the component is fairly simple in this case, it can save you a lot of time (and code) in case of larger, more complex components.

#### Component State

To keep the application as fast as possible, React will only update elements that are modified. It does this efficiently by listening to changes to component _props_ and component _state_. Component state is owned by the component (props are owned by the parent). We can define component state as follows:

```js
const [greeting, setGreeting] = React.useState('Hello World!');
```

The value of `greeting` can be accessed directly from the variable, it is however impossible to change the value of `greeting` like so:

```js
greeting = 'Goodbye World!';
```

While this will update the variable, it will not trigger a re-render of the component. Instead, the value should be changed as follows:

```js
setGreeting('Goodbye World!');
```

While this way of managing component state is very efficient for smaller applications, it's common practice to use libraries such as [Redux](https://redux.js.org/) and [MobX](https://mobx.js.org/) for state management in medium to large applications.

## Getting Started

As React is part of the JavaScript ecosystem, it's relatively easy to get up and running in just a few minutes.

1. Download the latest version of [NodeJS](https://nodejs.org/dist/v12.4.0/node-v12.4.0-x64.msi).
2. Install `npx` from the cli: `npm install -g npx`. npx automatically grabs the latest package version from the npm repository.
3. Use Create React App to set up your development environment `npx create-react-app` (from the cli). If you want to use TypeScript instead of JavaScript, add the `--typescript` flag.

This will get you setup to start coding away with React. For more resources check out:

- [The Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- My latest project: [Sails Festival](https://github.com/SamWolfs/sails-festival)
