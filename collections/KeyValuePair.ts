export class KeyValuePair<TKey, TValue> {
    private _key: TKey;
    private _value: TValue;

    constructor(key: TKey, value: TValue) {
        this._key = key;
        this._value = value;
    }

    get Value(): TValue {
        return this._value;
    }
    set Value(value: TValue) {
        this._value = value;
    }

    get Key(): TKey {
        return this._key;
    }
}
