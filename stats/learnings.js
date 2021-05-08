// npm init -y
// tsc --init ==> tsconfig.json
// npm i nodemon concurrently
// mkdir src
// mkdir build

// tsConfig.json
// outDir, rootDir
// "outDir": "./build",                    
// "rootDir": "./src"

// scripts in package.json
// "scripts": {
//   "start:build": "tsc -w",
//   "start:run": "nodemon build/index.js",
//   "start": "concurrently npm:start:*"
// }