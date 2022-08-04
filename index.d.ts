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

export const _default: { Logger: Logger, colorList: ListColors }

export default _default
