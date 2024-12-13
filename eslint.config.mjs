import react from 'eslint-plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: ['public', '.cache']
  },
  ...compat.extends('plugin:react/recommended', 'prettier'),
  {
    plugins: {
      react
    },

    languageOptions: {
      globals: {
        fathom: 'readonly'
      }
    },

    rules: {
      'no-useless-escape': 0,
      'prefer-const': 2,

      'no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      'react/prop-types': 0
    },

    settings: {
      react: {
        version: '18'
      }
    }
  }
]
