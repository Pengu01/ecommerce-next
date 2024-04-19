import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import { defineConfig } from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-next',

  projectId: 'fgi5vbwo',
  dataset: 'production',
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
