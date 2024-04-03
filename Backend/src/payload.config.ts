import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'



import {Pages} from './collections/Pages';
import {Media} from './collections/Media';

import { lexicalEditor } from '@payloadcms/richtext-lexical';


import Users from './collections/Users'


const mockModulePath = path.resolve(__dirname, 'emptyFunction.js');

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default buildConfig({

  serverURL: 'http://localhost:4000',

  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Media,

  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [/*payloadCloud()*/],
  db: postgresAdapter({
    pool:
        {
          connectionString:
          process.env.DATABASE_URI,
        }
  }),
})
