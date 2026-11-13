use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Clone, Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Hero {
    pub id: String,
    pub name: String,
    pub slug: String,
    pub publisher: String,
    pub universe: String,
    #[serde(default)]
    pub image_url: Option<String>,
    #[serde(default)]
    pub asset_path: Option<String>,
    pub class_name: String,
    pub description: String,
    pub href: String,
}

#[derive(Debug, Deserialize)]
struct Catalog {
    metadata: Metadata,
    heroes: Vec<Hero>,
}

#[derive(Debug, Deserialize)]
struct Metadata {
    universe: String,
    total: usize,
}

#[derive(Serialize)]
struct Stats {
    total: usize,
    marvel: usize,
    dc: usize,
    duplicate_ids: Vec<String>,
}

fn parse_catalog(json: &str, expected_universe: &str) -> Result<Vec<Hero>, JsValue> {
    let catalog: Catalog = serde_json::from_str(json)
        .map_err(|error| JsValue::from_str(&format!("Invalid catalog JSON: {error}")))?;
    if catalog.metadata.universe.to_lowercase() != expected_universe.to_lowercase() {
        return Err(JsValue::from_str("Catalog universe does not match its source"));
    }
    if catalog.metadata.total != catalog.heroes.len() {
        return Err(JsValue::from_str("Catalog metadata total does not match heroes"));
    }
    Ok(catalog.heroes)
}

fn validate_and_merge(marvel_json: &str, dc_json: &str) -> Result<Vec<Hero>, JsValue> {
    let mut heroes = parse_catalog(marvel_json, "Marvel")?;
    heroes.extend(parse_catalog(dc_json, "DC")?);
    let mut ids = std::collections::HashSet::new();
    for hero in &heroes {
        if hero.id.trim().is_empty() || !ids.insert(hero.id.clone()) {
            return Err(JsValue::from_str("Catalog contains duplicate or empty hero ids"));
        }
    }
    Ok(heroes)
}

#[wasm_bindgen]
pub struct CatalogEngine {
    heroes: Vec<Hero>,
}

#[wasm_bindgen]
impl CatalogEngine {
    #[wasm_bindgen(constructor)]
    pub fn new(marvel_json: &str, dc_json: &str) -> Result<CatalogEngine, JsValue> {
        Ok(Self { heroes: validate_and_merge(marvel_json, dc_json)? })
    }

    pub fn all(&self) -> Result<JsValue, JsValue> {
        serde_wasm_bindgen::to_value(&self.heroes).map_err(|error| JsValue::from_str(&error.to_string()))
    }

    pub fn by_universe(&self, universe: &str) -> Result<JsValue, JsValue> {
        let value: Vec<_> = self.heroes.iter().filter(|hero| hero.universe.eq_ignore_ascii_case(universe)).collect();
        serde_wasm_bindgen::to_value(&value).map_err(|error| JsValue::from_str(&error.to_string()))
    }

    pub fn search(&self, query: &str) -> Result<JsValue, JsValue> {
        let query = query.trim().to_lowercase();
        let value: Vec<_> = self.heroes.iter().filter(|hero| hero.name.to_lowercase().contains(&query)).collect();
        serde_wasm_bindgen::to_value(&value).map_err(|error| JsValue::from_str(&error.to_string()))
    }

    pub fn by_id(&self, id: &str) -> Result<JsValue, JsValue> {
        let value = self.heroes.iter().find(|hero| hero.id == id || hero.slug == id);
        serde_wasm_bindgen::to_value(&value).map_err(|error| JsValue::from_str(&error.to_string()))
    }

    pub fn stats(&self) -> Result<JsValue, JsValue> {
        let mut seen = std::collections::HashSet::new();
        let duplicate_ids = self.heroes.iter().filter_map(|hero| {
            if seen.insert(hero.id.clone()) { None } else { Some(hero.id.clone()) }
        }).collect();
        let stats = Stats {
            total: self.heroes.len(),
            marvel: self.heroes.iter().filter(|hero| hero.universe.eq_ignore_ascii_case("Marvel")).count(),
            dc: self.heroes.iter().filter(|hero| hero.universe.eq_ignore_ascii_case("DC")).count(),
            duplicate_ids,
        };
        serde_wasm_bindgen::to_value(&stats).map_err(|error| JsValue::from_str(&error.to_string()))
    }
}
