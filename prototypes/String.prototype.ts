import { StringExtension } from "./StringExtension.interface";

export class StringPrototype {
    static Register(): void {
        const _regexCommandCharacters: string[] = ["^", "$", ".", "|", "{", "}", "[", "]", "(", ")", "*", "+", "?", "\\"];

        (String.prototype as StringExtension).escapeForRegex = function (): string {
            let value = this as String;
            for (let i = value.length; i > -1; i--) {
                let foundCommandChar = _regexCommandCharacters.some((char) => value[i] === char);
                if (foundCommandChar) value = (value as StringExtension).insertAt("\\", i);
            }
            return value as string;
        };

        (String.prototype as StringExtension).insertAt = function (value: string, index: number) {
            return this.slice(0, index) + value + this.slice(index);
        };

        (String.prototype as StringExtension).trimAll = function (trimValue: string): string {
            let value = (trimValue as String as StringExtension).escapeForRegex();
            let trimStart = new RegExp(`^(${value})+`);
            let trimEnd = new RegExp(`(${value})+$`);
            return this.replace(trimStart, "").replace(trimEnd, "");
        };
    }
}
