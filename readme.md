# Handoff 0.6.0 POC Repo

This is a demonstration of the MVP repo for handoff.

### Quick Start
1. Run `npm install`
2. Run `npm run fetch`
3. Answer the prompts


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
const handoff = new Handoff['default']({
    title: "Handoff Custom"
});
await handoff.init();
await handoff.fetch();
```
