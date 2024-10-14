// @index(['./*.ts', './*.tsx'], (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}';`)
export { default as SearchPage } from "./search-page";
// @endindex
