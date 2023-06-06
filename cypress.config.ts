import { defineConfig } from "cypress";
import { seedDB, deleteUser } from "./cypress/tasks";

export default defineConfig({
  projectId: "2toy3p",
  e2e: {
    baseUrl: "http://127.0.0.1:3000",
    setupNodeEvents(on, config) {
      on("task", {
        seedDB,
        deleteUser,
      });
    },
  },
});
