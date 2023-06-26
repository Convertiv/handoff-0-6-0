# Handoff 0.6.0 POC Repo

This is a demonstration of the 0.6.0 code for handoff. Its written in typescript
to make it easier for you to use the handoff typings to build and manage the code

### Quick Start
1. Run `npm install`
1. Run `npm run build`
2. Run `npm run fetch`
3. Answer the prompts

### Integration
This repo is set up to allow easy testing of integration with Bootstrap 5.3 or
Tailwind 3.3.  The tailwind integration is not production ready yet, but this
repo allows you to test both.  

To test bootstrap, run `npm run start:bootstrap`.
To test tailwind, run `npm run start:tailwind`.

### Details
Handoff can be used either via the cli -

```
npm install -g handoff-app
handoff-app fetch
```

Or by installing as a node module and including it in your js or ts project.

```
npm install --save handoff-app
```

Then you can include it as normal -

```
import Handoff from "handoff-app";
const handoff = new Handoff({
    title: "Handoff Custom"
});
await handoff.init();
await handoff.fetch();
```
