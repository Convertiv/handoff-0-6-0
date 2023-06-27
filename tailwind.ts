import Handoff from "handoff-app";
import { DocumentationObject, HookReturn } from "handoff-app/dist/types";

// To use the hook, uncomment this
(async function () {
  try {
    const integration = {
      name: "tailwind",
      version: "3.3",
    };
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

    handoff.postIntegration(
      (documentationObject: DocumentationObject, data: HookReturn[]) => {
        const colors = documentationObject.design.color.map((color) => {
          return {
            name: color.name,
            value: color.value,
          };
        });
        data.push({
          filename: "colors.json",
          data: JSON.stringify(colors, null, 2),
        });
        return data;
      }
    );
    await handoff.fetch();
    await handoff.build();
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
})();
