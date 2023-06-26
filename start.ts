#! /usr/bin/env node
import Handoff from "handoff-app";

// To use the hook, uncomment this
(async function () {
  try {
    const integration = {
      name: "tailwind",
      version: "3.3",
    };
    if (process.argv.includes("bootstrap")) {
      integration.name = "bootstrap";
      integration.version = "5.3";
    }
    console.log(
      `Running Handoff fetch and build for ${integration.name} ${integration.version}`
    );
    const handoff = new Handoff({
      title: "Handoff Bootstrap",
      integration,
    });

    handoff.configureExportables((exportables) => {
      exportables.push("components/badge");
      return exportables;
    });
    await handoff.fetch();
    await handoff.start();
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
})();
