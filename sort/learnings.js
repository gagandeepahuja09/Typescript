// In this particular project, rather than using parcel and compiling
// html directly, we will compile ts file to js ==> ts-node or tsc
// we are going to create 2 separate folders src ==> for ts and build ==> for compiled js 
// all this config will be specified in the tsconfig.json file
// tsc --init
// tsc ==> For compilation to JS
// tsc --watch ==> To continuously watch for changes

// For concurrent compilation and execution as soon as we make changes,
// we will use 2 packages: Nodemon and Concurrently

// Change the start script in package.json
