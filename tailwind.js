import Handoff from "handoff-app";

// To use the hook, uncomment this
(async function () {
  try {
    const handoff = new Handoff.default({
      title: "Handoff Tailwind",
      integration: {
        name: "tailwind",
        version: "3.3"
      }
    });
    await handoff.fetch();
    await handoff.build();
    
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
})();
