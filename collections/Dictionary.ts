import { KeyValuePair } from "./KeyValuePair.js";

export class Dictionary<TKey, TValue> {
    TryAdd(key: TKey, value: TValue): boolean {
        try {
            this.Add(key, value);
            return true;
        } catch {
            return false;
        }
    }
    Update(key: TKey, value: TValue) {
        let match = this.TryGetKeyValuePair(key);
        if (match === null) throw "Argument Exception: key does not exist: " + key;
        match.Value = value;
    }
    Get(key: TKey): TValue {
        let match = this.TryGet(key);
        if (match === null) throw "Argument Exception: key does not exist: " + key;
        return match;
    }
    GetKeyValuePair(key: TKey): KeyValuePair<TKey, TValue> {
        let match = this.TryGetKeyValuePair(key);
        if (match === null) throw "Argument Exception: key does not exist: " + key;
        return match;
    }
    TryGet(key: TKey): TValue | null {
        let match = this._keyValuePairs.find((pair, i, pairs) => pair.Key == key);
        return match?.Value ?? null;
    }
    TryGetKeyValuePair(key: TKey): KeyValuePair<TKey, TValue> | null {
        let match = this._keyValuePairs.find((pair, i, pairs) => pair.Key == key);
        return match ?? null;
    }
    private _keyValuePairs: KeyValuePair<TKey, TValue>[] = [];

    constructor(dictionary: Dictionary<TKey, TValue> | null = null) {
        if (dictionary) {
            this._keyValuePairs = dictionary.KeyValuePairs.map((pair, i, pairs) => new KeyValuePair<TKey, TValue>(pair.Key, pair.Value));
        }
    }
    Add(key: TKey, value: TValue): void {
        if (this.ContainsKey(key)) throw "Argument Exception: key already exists: " + key;
        this._keyValuePairs.push(new KeyValuePair(key, value));
    }
    ContainsKey(key: TKey): boolean {
        let index = this._keyValuePairs.findIndex((pair, i, pairs) => pair.Key == key);
        return index >= 0;
    }
    Remove(key: TKey): void {
        let index = this._keyValuePairs.findIndex((pair, i, pairs) => pair.Key == key);
        if (index < 0) throw "Argument Exception: key does not exist: " + key;
        this._keyValuePairs.splice(index, 1); //remove
    }

    get Keys(): TKey[] {
        return this._keyValuePairs.map((pair, i, pairs) => pair.Key);
    }
    get Values(): TValue[] {
        return this._keyValuePairs.map((pair, i, pairs) => pair.Value);
    }
    get KeyValuePairs(): KeyValuePair<TKey, TValue>[] {
        return this._keyValuePairs;
    }
}
