# Typescript by @rmadrazo97

## What is typescript?
- Javascript with syntax for types
- typed programming language
- - types to use with variables
- - - personalizable, extendable
- high level language
- compiler generates Javascript
- open source
- similar to javascript
- - add TS support to existing JS projects
- TS is a javascript superset: includes, ES5, ES6

## famous companies that use TS
- Microsoft, Google, Airbnb, Shopify....

## Open source projects with TS 
- https://github.com/topics/typescript

## Why use typescript
- Take advantage of OOP
- give powers to JS
- increase productivity: TS focues on less code and more features.
- It can use the latests features of JS
- Active Open source project
- active community
- According to a study: reduces 15% of bugs in comparison to non typed programming languages
- it works on both: front and back end sides

## requirements
- nodejs LTS
- code editor (VS code)
- NVM is useful

## typescript compiler
- TSC : typescript compiler
- install: npm install -g typescript
- - verify: tsc --version
- using tsc
- - we have a file: hello.ts -> TS -> hello.js
- - .ts files are compiled using TSC which outputs .js files
- - example: tsc hello.ts -> compiles verifies and compiles -> generates hello.js
- - for this we need a js runtime we can use node's v8 runtime
- tsc watch
- - a service that watches changes on certain file to generate a js file on "hot"
- - tsc --watch file.ts

## tsconfig.json
- allows ys to specifiy root folder
- config options for compiler
- generate: tsc --init
- compiler options
- - we can use multiple ES versions
- - module: module configurations
- - remove comments
- - specify files and directories to compile
- - specify files to ignore 
- - we can inherit config files form directories
- - we can set compile on save -> auto compile when saving file. 
- we can specify a specific config file

## types in ts
- TS is has explicit types
- TS has the ability to infer a variable's type.
- explicit: variableName:type
- implicit variable = value
- ts has all js primitive types

## tools
- block style code editor: https://editorjs.io/
