# Hero catalog engine

This crate validates and processes the Marvel and DC catalogues in the browser.
It does not perform network requests. React downloads the JSON files with `fetch`
and passes their text to the generated WebAssembly module.

Build the browser package from the repository root with:

```sh
wasm-pack build rust-engine --target web --release --out-dir ../src/wasm
```
