# _My Portfolio_

#### This is a web-application that will become my portfolio as a web developer

#### By Quinn Miller

_Updated Feb 25th 2019_

## Description

This project will be a website that shows off the work that I've done as a junior web developer. I will use React to build this app from the ground up. Starting with a blueprint of how this app will be structured, which I will include in this readme. Eventually it will have a few pictures of me, an 'about me' section, and a section that showcases the projects I'm most proud of.

## Components

React uses a system of components to keep each part of an application compartmentalized. This allows the developer to re-use these components in current and/or future applications. At the very least, it's an amazing organizational system. The bigger a project gets, the more vital this system becomes.

Some components contain data, and manage the 'state' of that data. This data can range from content that the end-user can change, to a value dictating whether something is hidden or shown. These are called stateful components. Components that do not have state are refered to as being 'pure' because they either exist or they don't. 

However, pure components can be greatly manipulated by their stateful parent component. For example: A stateful component might contain a list. For each item on the list, a pure component is generated containing that item's information. When the list is updated React will see the change, then re-render _only the parts of the DOM that are different_. This is called 'reconciliation' and it's what makes React special.

Here's how the components in my application are structured:

![Image of component tree](./src/assets/images/ComponentTree.png)

## Setup/Installation Requirements

_it has not been deployed yet. If you would like to see this project in action, you will have to follow these steps._

1. You must have Node package manager installed on your machine.
2. Clone or download the project.
3. Open a terminal window (if you are on Windows you can use Command Prompt or CMDPrompt).
4. Using the terminal, navigate to the project folder and type 'npm install' without quotations. Node should install the necessary dependencies.
5. Type 'npm run start' without quotations. The application should build with no errors (fingers crossed).
6. In your browser's address bar (I've only used Chrome), type 'http://localhost:8080' without quotations.

If the above steps worked you should now see my portfolio in its current state.

## Known Issues and Notes.

* There are probably still many grammatical errors.
* I would like to use Cards from the react-materialize library, but they don't work. All the other components that i've used from that library seem to work just fine. I've posted a question on stack-overflow and also in the react-materialize gitter channel (which is kindof dead).
* When the navbar collapses, a hamburger icon is supposed to show up. That icon is currently invisible. I just need to make it black instead of white.
* The parallax pictures are just placeholders. It's from Materialize's parallax example.

## Support and contact details


I'm still learning so feel free to contact me with any suggestions or questions.
Leave a comment or contact me at millerquinn66@gmail.com


## Technologies Used

* Javascript
* React
* Materialize
* NodeJS
* Webpack
* CSS
* HTML
* Git
* Lint
* Atom
* Markdown
* draw.io to make the component tree
* See package.json for a full list dependencies

### License

*Copyright (c) 2019 Quinn Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 **Quinn Miller**
