import { defineConfig } from "cypress";
import { seedDB, deleteUser } from "./cypress/tasks";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        seedDB,
        deleteUser,
      });
    },
  },
});
