const rgbToHex = (rgb: number) => {
    let hex = rgb.toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

export const getFullColorHsl = (h: number, s: number, l:number) => {
    return `hsl(${h}, ${s}%, ${l}%)`
};

export const getFullColorHex = (r:number, g:number, b:number) => {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return `#${red}${green}${blue}`;
};

export const getFullColor = (r: number, g: number, b:number, a:number) => {
    return `rgba(${r},${g},${b},${a})`
};
