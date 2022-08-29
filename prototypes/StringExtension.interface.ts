export interface StringExtension extends String {
    escapeForRegex(): string;
    insertAt(value: string, index: number): string;
    trimAll(trimValue: string): string;
}
