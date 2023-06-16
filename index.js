import Handoff from "handoff-app";
// To use the hook, uncomment this
try {
  const handoff = new Handoff['default']({
    title: "Handoff Custom"
  });
  // To use the hook, uncomment this
  handoff.postIntegration((documentationObject) => {
    console.log("postIntegration");
  });
  await handoff.init();
  await handoff.fetch();
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(0);
}
