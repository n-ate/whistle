export class StringPrototype {
    static Register(): void {
        const _regexCommandCharacters: string[] = ["^", "$", ".", "|", "{", "}", "[", "]", "(", ")", "*", "+", "?", "\\"];

        String.prototype.escapeForRegex = function (): string {
            let value = this as string;
            for (let i = value.length; i > -1; i--) {
                let foundCommandChar = _regexCommandCharacters.some((char) => value[i] === char);
                if (foundCommandChar) value = value.insertAt("\\", i);
            }
            return value;
        };

        String.prototype.insertAt = function (value: string, index: number) {
            return this.slice(0, index) + value + this.slice(index);
        };

        String.prototype.trimAll = function (trimValue: string): string {
            let value = trimValue.escapeForRegex();
            let trimStart = new RegExp(`^(${value})+`);
            let trimEnd = new RegExp(`(${value})+$`);
            return this.replace(trimStart, "").replace(trimEnd, "");
        };
    }
}
