export type JSONObject = { [key: string]: JSON }
export interface JSONArray extends Array<JSON> {}
export type JSON = null | string | number | boolean | JSONArray | JSONObject

export default function ParseToJson(sm: string) : JSONObject {
    return JSON.parse(sm);
}