const localUrl = (file) => `${process.env.PUBLIC_URL || ""}/data/${file}`;
const urls = {
  Marvel:
    process.env.REACT_APP_MARVEL_JSON_URL ||
    process.env.VITE_MARVEL_JSON_URL ||
    localUrl("marvel.json"),
  DC:
    process.env.REACT_APP_DC_JSON_URL ||
    process.env.VITE_DC_JSON_URL ||
    localUrl("dc.json"),
};

let wasmPromise;
let wasmModule;
let catalogPromise;
let engine;

const initializeWasm = () => {
  if (!wasmPromise) {
    wasmPromise = import("../wasm/hero_catalog_engine").then((module) => {
      wasmModule = module;
      return module.default();
    });
  }
  return wasmPromise;
};

const fetchCatalog = async (universe) => {
  const response = await fetch(urls[universe]);
  if (!response.ok) {
    throw new Error(`No se pudo descargar el catálogo ${universe} (${response.status})`);
  }
  return response.text();
};

const loadCatalog = async () => {
  await initializeWasm();
  const [marvel, dc] = await Promise.all([
    fetchCatalog("Marvel"),
    fetchCatalog("DC"),
  ]);
  engine = new wasmModule.CatalogEngine(marvel, dc);
  return engine;
};

const getEngine = () => {
  if (!catalogPromise) {
    catalogPromise = loadCatalog();
  }
  return catalogPromise;
};

const HeroDataService = {
  async getHeroes(universe) {
    const catalog = await getEngine();
    return catalog.by_universe(universe);
  },

  async search(query) {
    const catalog = await getEngine();
    return catalog.search(query);
  },

  async getById(id) {
    const catalog = await getEngine();
    return catalog.by_id(id);
  },

  async getStats() {
    const catalog = await getEngine();
    return catalog.stats();
  },

  async refresh() {
    catalogPromise = loadCatalog();
    return catalogPromise;
  },
};

export default HeroDataService;
