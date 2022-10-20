import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: 'pgr5kd',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
  },
})
