export class RouteSegment {
    private _raw: string;

    get Raw(): string {
        return this._raw;
    }

    constructor(segment: string) {
        this._raw = segment;
    }
}
