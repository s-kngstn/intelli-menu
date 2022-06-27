type AllergyType = {
  milk: boolean;
  gluten: boolean;
};

export interface AllergyTypeArray {
  allergies: AllergyType[];
}

// JSON Types
export type JSONPrimitive = string | number | boolean | null;
// eslint-disable-next-line no-use-before-define
export type JSONValue = JSONArray | JSONObject | JSONPrimitive;
export type JSONObject = { [key: string]: JSONValue };
export type JSONArray = JSONValue[];

// | "Milk"
// | "Gluten"
// | "Nuts"
// | "Peanuts"
// | "Sesame Seeds"
// | "Soya"
// | "Sulphur Dioxide"
// | "Eggs"
// | "Lupin"
// | "Crustacean"
// | "Molluscs"
// | "Mustard"
// | "Celery"
// | "Fish"
// | "Veg"
// | "Vegan"
// | "Pescatarian";
