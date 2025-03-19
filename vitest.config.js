import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        provider: "v8", // Use "v8" instead of "c8"
        reporter: ["text", "lcov"], // "text" shows results in terminal, "lcov" for HTML report
        all: true, // Include all files, even if they aren’t tested
        exclude: ["node_modules", "dist", "tests", "vitest.config.js"], // Exclude these files
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
