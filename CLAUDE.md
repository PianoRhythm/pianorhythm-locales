# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This repo holds translation JSON files for PianoRhythm. It is not application code — there is no build step. The only "code" is `index.js`, a stub validation runner that currently logs success without actually validating (the AJV check is commented out).

## Commands

- `npm install` — install AJV dependencies (only needed if extending validation).
- `npm run validate` — runs `index.js` (currently a no-op logger; see note above).

CI: `bitbucket-pipelines.yml` runs `npm install && npm run validate` on every push.

## Repository layout

- `locales/{languageTag}/` — per-language translations. The set of supported `languageTag` values is the source of truth in `project.inlang/settings.json` (`languageTags`). `en` is the source language.
- `locales/{languageTag}/*.json` — five namespaces per language: `common`, `loginPage`, `roomPage`, `roomPage.settingsModal`, `server.messages`. The path pattern is declared in `project.inlang/settings.json` under `plugin.inlang.json.pathPattern` — adding a namespace requires updating that map.
- `locales/_empty_jsons/` — template stubs (empty `{}` files) used when bootstrapping a new language. Do not treat these as real translations.
- `schema/common.js` — partial AJV schema for `common.json`. It is out of date relative to `locales/en/common.json` (real keys like `generalMessages`, extra `buttons.*`, extra `errorMessages.*` are not declared) and is currently unused because the validation call in `index.js` is commented out. If you re-enable validation, expect the schema to fail until expanded.

## Translation conventions

- Variables in strings use `{...}` per the inlang JSON plugin's `variableReferencePattern`. Some legacy strings in `en/common.json` use `{{...}}` (e.g. `"Connected to {{appName}}"`) — match the existing pattern of the file you're editing rather than rewriting.
- Keep key structure identical across languages. The English file is the source; other locales mirror its shape.
- inlang lint rules in effect: `missingTranslation` (error), plus `emptyPattern`, `withoutSource`, `identicalPattern`, `camelCaseId`. `missingTranslation` will block PRs via the inlang badge in the README.

## When adding a new language

1. Add the tag to `project.inlang/settings.json` `languageTags`.
2. Create `locales/{tag}/` and copy the five JSON files from `locales/en/` (or from `_empty_jsons/` to start blank), then translate.
