type ColorType = [number, number]

interface Logger {

    errColor: ColorType;

    infoColor: ColorType;

    logColor: ColorType;

    spaces: ColorType;

    new (errColor?: ColorType, infoColor?: ColorType, logColor?: ColorType, spaces?: number): {

    error(msg?: string, err?: unknown): void

    info(msg: unknown): void


    log(msg: unknown): void
    }
}

interface ListColors {
    black: ColorType,
    red: ColorType,
    green: ColorType,
    yellow: ColorType,
    blue: ColorType,
    magenta: ColorType,
    cyan: ColorType,
    white: ColorType,
    gray: ColorType,
    grey: ColorType,
}
declare const _Logger: _Logger.TP
declare namespace _Logger {
    export interface TP {
        Logger: Logger,
        colorList: ListColors
    }
}

export = _Logger;
