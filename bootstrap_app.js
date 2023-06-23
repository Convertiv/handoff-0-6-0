import Handoff from "handoff-app";

// To use the hook, uncomment this
(async function () {
  try {
    const handoff = new Handoff.default({
      title: "Handoff Bootstrap",
      integration: {
        name: "bootstrap",
        version: "5.3"
      }
    });
    await handoff.fetch();
    await handoff.start();
    
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
})();
