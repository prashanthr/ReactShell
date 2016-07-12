# React Shell
A shell application to bootstrap your react applications

# Installation
1. Install Node.js from [https://nodejs.org/en/](https://nodejs.org/en/)
2. Run the following Command
```JavaScript
cd src
npm install
```
4. Open src/index.html in your browser

# Build
1. Make your changes
2. Run the following command in the package.json scripts.build
3. It will create a single compiled Javascript file in the src/build folder. index.html references this file.
```JavaScript
cd src
browserify -t [babelify] ./app/index.js -o ./app/build/app.js
```

# Included Packages
**react**  
**react-dom**  
**react-router**  
**babel-preset-react**  
**babelify**  
**browserify**  

## Coming Soon
flux  
