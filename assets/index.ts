// @index(['./*.svg', './*.png'], (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as Giphy } from "./giphy.svg";
// @endindex
