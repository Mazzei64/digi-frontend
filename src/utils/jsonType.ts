export type JSONObject = { [key: string]: JSON }

export default function ParseToJson(sm: string) : JSONObject {
    return JSON.parse(sm);
}