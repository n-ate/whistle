interface String {
    escapeForRegex(): string;
    insertAt(value: string, index: number): string;
    trimAll(trimValue: string): string;
}
