import { DefaultTheme } from 'styled-components';

export default function useDesignTokens(): {
    theme: DefaultTheme | undefined;
    borderRadius: (token: keyof DefaultTheme["borderRadius"]) => string | number | (() => string) | ((...strings: string[]) => string) | ((start?: number, end?: number) => string) | ((searchString: string, position?: number) => number) | ((searchString: string, position?: number) => number) | ((searchString: string, position?: number) => boolean) | (() => StringIterator<string>) | ((index: number) => string | undefined) | ((pos: number) => string) | ((index: number) => number) | {
        (that: string): number;
        (that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
        (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions): number;
    } | {
        (regexp: string | RegExp): RegExpMatchArray | null;
        (matcher: {
            [Symbol.match](string: string): RegExpMatchArray | null;
        }): RegExpMatchArray | null;
    } | {
        (searchValue: string | RegExp, replaceValue: string): string;
        (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
        (searchValue: {
            [Symbol.replace](string: string, replaceValue: string): string;
        }, replaceValue: string): string;
        (searchValue: {
            [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
        }, replacer: (substring: string, ...args: any[]) => string): string;
    } | {
        (regexp: string | RegExp): number;
        (searcher: {
            [Symbol.search](string: string): number;
        }): number;
    } | {
        (separator: string | RegExp, limit?: number): string[];
        (splitter: {
            [Symbol.split](string: string, limit?: number): string[];
        }, limit?: number): string[];
    } | ((start: number, end?: number) => string) | (() => string) | {
        (locales?: string | string[]): string;
        (locales?: Intl.LocalesArgument): string;
    } | (() => string) | {
        (locales?: string | string[]): string;
        (locales?: Intl.LocalesArgument): string;
    } | (() => string) | ((from: number, length?: number) => string) | (() => string) | ((pos: number) => number | undefined) | ((searchString: string, endPosition?: number) => boolean) | {
        (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
        (form?: string): string;
    } | ((count: number) => string) | ((searchString: string, position?: number) => boolean) | ((name: string) => string) | (() => string) | (() => string) | (() => string) | (() => string) | ((color: string) => string) | {
        (size: number): string;
        (size: string): string;
    } | (() => string) | ((url: string) => string) | (() => string) | (() => string) | (() => string) | (() => string) | ((maxLength: number, fillString?: string) => string) | ((maxLength: number, fillString?: string) => string) | (() => string) | (() => string) | (() => string) | (() => string) | ((regexp: RegExp) => RegExpStringIterator<RegExpExecArray>) | undefined;
    breakpoint: (token: keyof DefaultTheme["breakpoints"]) => `@media(min-width: ${number}px)` | undefined;
    color: (token: keyof DefaultTheme["colors"]) => string | undefined;
    fontSize: (token: keyof DefaultTheme["fontSizes"]) => string | ((index: number) => string | undefined) | 8 | (<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | {
        <S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): string[];
    } | (() => ArrayIterator<string>) | {
        [x: number]: boolean | undefined;
        length?: boolean | undefined;
        toString?: boolean | undefined;
        toLocaleString?: boolean | undefined;
        pop?: boolean | undefined;
        push?: boolean | undefined;
        concat?: boolean | undefined;
        join?: boolean | undefined;
        reverse?: boolean | undefined;
        shift?: boolean | undefined;
        slice?: boolean | undefined;
        sort?: boolean | undefined;
        splice?: boolean | undefined;
        unshift?: boolean | undefined;
        indexOf?: boolean | undefined;
        lastIndexOf?: boolean | undefined;
        every?: boolean | undefined;
        some?: boolean | undefined;
        forEach?: boolean | undefined;
        map?: boolean | undefined;
        filter?: boolean | undefined;
        reduce?: boolean | undefined;
        reduceRight?: boolean | undefined;
        find?: boolean | undefined;
        findIndex?: boolean | undefined;
        fill?: boolean | undefined;
        copyWithin?: boolean | undefined;
        entries?: boolean | undefined;
        keys?: boolean | undefined;
        values?: boolean | undefined;
        includes?: boolean | undefined;
        flatMap?: boolean | undefined;
        flat?: boolean | undefined;
        [Symbol.iterator]?: boolean | undefined;
        readonly [Symbol.unscopables]?: boolean | undefined;
        at?: boolean | undefined;
    } | (() => string) | {
        (): string;
        (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
    } | (() => string | undefined) | ((...items: string[]) => number) | {
        (...items: ConcatArray<string>[]): string[];
        (...items: (string | ConcatArray<string>)[]): string[];
    } | ((separator?: string) => string) | (() => string[]) | (() => string | undefined) | ((start?: number, end?: number) => string[]) | ((compareFn?: ((a: string, b: string) => number) | undefined) => [string, string, string, string, string, string, string, string]) | {
        (start: number, deleteCount?: number): string[];
        (start: number, deleteCount: number, ...items: string[]): string[];
    } | ((...items: string[]) => number) | ((searchElement: string, fromIndex?: number) => number) | ((searchElement: string, fromIndex?: number) => number) | {
        <S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): boolean;
    } | ((predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any) => void) | {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[]) => U, initialValue: U): U;
    } | {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[]) => U, initialValue: U): U;
    } | {
        <S extends string>(predicate: (value: string, index: number, obj: string[]) => value is S, thisArg?: any): S | undefined;
        (predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): string | undefined;
    } | ((predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any) => number) | ((value: string, start?: number, end?: number) => [string, string, string, string, string, string, string, string]) | ((target: number, start: number, end?: number) => [string, string, string, string, string, string, string, string]) | (() => ArrayIterator<[number, string]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<string>) | ((searchElement: string, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | undefined;
    fontWeight: (token: keyof DefaultTheme["fontWeights"]) => 600 | 400 | 500 | undefined;
    lineHeight: (token: keyof DefaultTheme["lineHeights"]) => 7 | 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | (<U>(callbackfn: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => U, thisArg?: any) => U[]) | {
        <S extends 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>(predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => value is S, thisArg?: any): S[];
        (predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => unknown, thisArg?: any): (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[];
    } | (() => ArrayIterator<1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>) | {
        [x: number]: boolean | undefined;
        length?: boolean | undefined;
        toString?: boolean | undefined;
        toLocaleString?: boolean | undefined;
        pop?: boolean | undefined;
        push?: boolean | undefined;
        concat?: boolean | undefined;
        join?: boolean | undefined;
        reverse?: boolean | undefined;
        shift?: boolean | undefined;
        slice?: boolean | undefined;
        sort?: boolean | undefined;
        splice?: boolean | undefined;
        unshift?: boolean | undefined;
        indexOf?: boolean | undefined;
        lastIndexOf?: boolean | undefined;
        every?: boolean | undefined;
        some?: boolean | undefined;
        forEach?: boolean | undefined;
        map?: boolean | undefined;
        filter?: boolean | undefined;
        reduce?: boolean | undefined;
        reduceRight?: boolean | undefined;
        find?: boolean | undefined;
        findIndex?: boolean | undefined;
        fill?: boolean | undefined;
        copyWithin?: boolean | undefined;
        entries?: boolean | undefined;
        keys?: boolean | undefined;
        values?: boolean | undefined;
        includes?: boolean | undefined;
        flatMap?: boolean | undefined;
        flat?: boolean | undefined;
        [Symbol.iterator]?: boolean | undefined;
        readonly [Symbol.unscopables]?: boolean | undefined;
        at?: boolean | undefined;
    } | (() => string) | {
        (): string;
        (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
    } | (() => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | undefined) | ((...items: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => number) | {
        (...items: ConcatArray<1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>[]): (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[];
        (...items: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | ConcatArray<1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>)[]): (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[];
    } | ((separator?: string) => string) | (() => (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) | (() => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | undefined) | ((start?: number, end?: number) => (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) | ((compareFn?: ((a: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, b: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5) => number) | undefined) => [1.14, 1.22, 1.25, 1.33, 1.43, 1.45, 1.5]) | {
        (start: number, deleteCount?: number): (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[];
        (start: number, deleteCount: number, ...items: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]): (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[];
    } | ((...items: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => number) | ((searchElement: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, fromIndex?: number) => number) | ((searchElement: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, fromIndex?: number) => number) | {
        <S extends 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>(predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => unknown, thisArg?: any): boolean;
    } | ((predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => void, thisArg?: any) => void) | {
        (callbackfn: (previousValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5): 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5;
        (callbackfn: (previousValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, initialValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5): 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5;
        <U>(callbackfn: (previousValue: U, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => U, initialValue: U): U;
    } | {
        (callbackfn: (previousValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5): 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5;
        (callbackfn: (previousValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, initialValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5): 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5;
        <U>(callbackfn: (previousValue: U, currentValue: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, currentIndex: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => U, initialValue: U): U;
    } | {
        <S extends 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>(predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, obj: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => value is S, thisArg?: any): S | undefined;
        (predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, obj: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => unknown, thisArg?: any): 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | undefined;
    } | ((predicate: (value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, obj: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => unknown, thisArg?: any) => number) | ((value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, start?: number, end?: number) => [1.14, 1.22, 1.25, 1.33, 1.43, 1.45, 1.5]) | ((target: number, start: number, end?: number) => [1.14, 1.22, 1.25, 1.33, 1.43, 1.45, 1.5]) | (() => ArrayIterator<[number, 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5>) | ((searchElement: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5, index: number, array: (1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5)[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => 1.14 | 1.22 | 1.25 | 1.33 | 1.43 | 1.45 | 1.5 | undefined) | undefined;
    motion: (token: keyof DefaultTheme["motion"]) => {
        easeInSine: string;
        easeOutSine: string;
        easeInOutSine: string;
        easeInQuad: string;
        easeOutQuad: string;
        easeInOutQuad: string;
        easeInCubic: string;
        easeOutCubic: string;
        easeInOutCubic: string;
        easeInQuart: string;
        easeOutQuart: string;
        easeInOutQuart: string;
        easeInQuint: string;
        easeOutQuint: string;
        easeInOutQuint: string;
        easeInExpo: string;
        easeOutExpo: string;
        easeInOutExpo: string;
        easeInCirc: string;
        easeOutCirc: string;
        easeInOutCirc: string;
        easeInBack: string;
        easeOutBack: string;
        easeInOutBack: string;
        easeInOutFast: string;
        authenticMotion: string;
    } | {
        '320': string;
        '200': string;
        '120': string;
    } | undefined;
    shadow: (token: keyof DefaultTheme["shadows"]) => string | undefined;
    size: (token: keyof DefaultTheme["sizes"]) => {
        S: import('@strapi/design-system').ResponsiveProperty<string>;
        M: import('@strapi/design-system').ResponsiveProperty<string>;
        L: import('@strapi/design-system').ResponsiveProperty<string>;
    } | {
        S: string;
        M: string;
    } | undefined;
    space: (token: keyof DefaultTheme["spaces"]) => 12 | "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | (<U>(callbackfn: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => U, thisArg?: any) => U[]) | {
        <S extends "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">(predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => value is S, thisArg?: any): S[];
        (predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => unknown, thisArg?: any): ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[];
    } | (() => ArrayIterator<"0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">) | {
        [x: number]: boolean | undefined;
        length?: boolean | undefined;
        toString?: boolean | undefined;
        toLocaleString?: boolean | undefined;
        pop?: boolean | undefined;
        push?: boolean | undefined;
        concat?: boolean | undefined;
        join?: boolean | undefined;
        reverse?: boolean | undefined;
        shift?: boolean | undefined;
        slice?: boolean | undefined;
        sort?: boolean | undefined;
        splice?: boolean | undefined;
        unshift?: boolean | undefined;
        indexOf?: boolean | undefined;
        lastIndexOf?: boolean | undefined;
        every?: boolean | undefined;
        some?: boolean | undefined;
        forEach?: boolean | undefined;
        map?: boolean | undefined;
        filter?: boolean | undefined;
        reduce?: boolean | undefined;
        reduceRight?: boolean | undefined;
        find?: boolean | undefined;
        findIndex?: boolean | undefined;
        fill?: boolean | undefined;
        copyWithin?: boolean | undefined;
        entries?: boolean | undefined;
        keys?: boolean | undefined;
        values?: boolean | undefined;
        includes?: boolean | undefined;
        flatMap?: boolean | undefined;
        flat?: boolean | undefined;
        [Symbol.iterator]?: boolean | undefined;
        readonly [Symbol.unscopables]?: boolean | undefined;
        at?: boolean | undefined;
    } | (() => string) | {
        (): string;
        (locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
    } | (() => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | undefined) | ((...items: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => number) | {
        (...items: ConcatArray<"0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">[]): ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[];
        (...items: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | ConcatArray<"0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">)[]): ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[];
    } | ((separator?: string) => string) | (() => ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) | (() => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | undefined) | ((start?: number, end?: number) => ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) | ((compareFn?: ((a: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", b: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px") => number) | undefined) => ["0px", "4px", "8px", "12px", "16px", "20px", "24px", "32px", "40px", "48px", "56px", "64px"]) | {
        (start: number, deleteCount?: number): ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[];
        (start: number, deleteCount: number, ...items: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]): ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[];
    } | ((...items: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => number) | ((searchElement: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", fromIndex?: number) => number) | ((searchElement: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", fromIndex?: number) => number) | {
        <S extends "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">(predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => unknown, thisArg?: any): boolean;
    } | ((predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => void, thisArg?: any) => void) | {
        (callbackfn: (previousValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px"): "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px";
        (callbackfn: (previousValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", initialValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px"): "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px";
        <U>(callbackfn: (previousValue: U, currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => U, initialValue: U): U;
    } | {
        (callbackfn: (previousValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px"): "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px";
        (callbackfn: (previousValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", initialValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px"): "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px";
        <U>(callbackfn: (previousValue: U, currentValue: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", currentIndex: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => U, initialValue: U): U;
    } | {
        <S extends "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">(predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, obj: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => value is S, thisArg?: any): S | undefined;
        (predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, obj: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => unknown, thisArg?: any): "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | undefined;
    } | ((predicate: (value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, obj: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => unknown, thisArg?: any) => number) | ((value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", start?: number, end?: number) => ["0px", "4px", "8px", "12px", "16px", "20px", "24px", "32px", "40px", "48px", "56px", "64px"]) | ((target: number, start: number, end?: number) => ["0px", "4px", "8px", "12px", "16px", "20px", "24px", "32px", "40px", "48px", "56px", "64px"]) | (() => ArrayIterator<[number, "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px"]>) | (() => ArrayIterator<number>) | (() => ArrayIterator<"0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px">) | ((searchElement: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", fromIndex?: number) => boolean) | (<U, This = undefined>(callback: (this: This, value: "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px", index: number, array: ("0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px")[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | ((index: number) => "0px" | "4px" | "8px" | "12px" | "16px" | "20px" | "24px" | "32px" | "40px" | "48px" | "56px" | "64px" | undefined) | undefined;
    transition: (token: keyof DefaultTheme["transitions"]) => string | undefined;
    zIndex: (token: keyof DefaultTheme["zIndices"]) => 100 | 500 | 320 | 1000 | 300 | 310 | 700 | undefined;
};
/**
 * Converts a nested object into a string of CSS variables.
 * @param obj The object to convert into CSS variables.
 * @param prefix An optional prefix to prepend to each CSS variable name.
 * @returns A string of CSS variables in the format of `:root { --prefixkey: value; }`.
 */
export declare function objectToCssVariables(obj: Record<string, any>, prefix?: string): string;
