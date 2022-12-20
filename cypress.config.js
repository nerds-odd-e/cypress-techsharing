import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    TAGS: 'not @ignore',
  },
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 6000,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    experimentalRunAllSpecs: true,
    excludeSpecPattern: [
      '**/__snapshots__/*',
      '**/__image_snapshots__/*',
    ],
    baseUrl: 'http://localhost:3000',
  },
})

