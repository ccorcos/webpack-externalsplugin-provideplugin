# Webpack ExternalsPlugin with ProvidePlugin

I'm using Webpack to compile a website that is sometimes used inside an Electron app. Electron provides a global `require`, but that causes some problems when we redirect to other websites so we're deleting the global `require` and changing the namespace to avoid conflicts. However, some packages need to use `require` to load external modules.

So my goal is to be able to use the ExternalsPlugin so that Webpack will leave the require statements intact, and then use the ProvidePlugin to patch the require statements with the aliased require function. Sadly, this does not work.

## How this example works

`index.js` requires `something`. `something` is specified as an external module in the webpack plugin. `require.js` is the patched require function that I want to use. When I bundle everything up, you can see in `bundle.js` that there's no sign of the patched `require.js` function.

## FAQ

- Why not use the `electron-renderer` target? This breaks things when I want to use the website within a browser without Electron. I'm not entirely sure why, but there are all kinds of functions that look for things like `process.target` and stuff like that which is not available.
