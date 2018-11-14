const hsv2hsl = function(hue, sat, val) {
  return [
    hue,
    (sat * val) / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0,
    hue / 2
  ];
};

const hsl2hsv = function(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  let sv;
  let v;

  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

/**
 * rgb转为hsv/hsl
 * 具体实现https://zh.wikipedia.org/wiki/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4
 * @param {string|number} r
 * @param {string|number} g
 * @param {string|number} b
 * @param {boolean} isHsl 是否转为hsl
 */
const rgbToHsvAndHsl = function(r, g, b, isHsl) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  if (isHsl) {
    let s;
    let l = (max + min) / 2;
    if (max === min || l === 0) {
      s = 0;
    } else if (l < 0.5) {
      s = d / (max + min);
    } else if (l > 0.5) {
      s = d / (2 - max - min);
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  } else {
    let s;
    let v = max;

    s = max === 0 ? 0 : d / max;

    return { h: h * 360, s: s * 100, v: v * 100 };
  }
};

/**
 * HSV转为rgb色彩
 * @param {string|number} h
 * @param {string|number} s
 * @param {string|number} v
 * @return {r:number, g: number, b: number}
 */
const hsvToRgb = function(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
const isOnePointZero = function(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
};

const isPercentage = function(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
};

// Take input from [0, n] and return it as [0, 1]
const bound01 = function(value, max) {
  if (isOnePointZero(value)) value = "100%";

  const processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return (value % max) / parseFloat(max);
};

/**
 * hex色值转rgb
 * @param {string} s hex色值
 * @return {r: number, g: number, b: number} s hex色值
 */
const hexToRgb = function(s) {
  if (s.length === 3) {
    s = s
      .split("")
      .map(val => val.repeat(2))
      .join("");
  }
  let [r, g, b] = s.split(/([a-fA-F0-9]{2})/).filter(v => v);
  return {
    r: parseInt("0x" + r),
    g: parseInt("0x" + g),
    b: parseInt("0x" + b)
  };
};

/**
 * rgb转hex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return{string} hex色值
 */
const rgbToHex = function(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export default class Color {
  constructor({ alpha, format }) {
    // H 色调
    this._hue = 0;
    // S 饱和度
    this._saturation = 100;
    // L 亮度
    this._value = 100;
    // A 透明度
    this._alpha = 100;
    // 输出格式
    this.format = format;
    // 透明
    this._showAlpha = alpha;
    // 是否初始值
    this.initValue = false;
  }

  /**
   * 初始化
   * @param {string} value 色值
   */
  init(value) {
    this.initValue = false;
    let checkRgbOrRgba = /^rgb(a)?[\(](2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0?\.\d{1,2}|1|0)?[\)]{1}?$/i;
    let checkHex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
    let checkHsvOrHsl = /^hs(l|v)\((3[0-5][0-9]|360|[1-2][0-9][0-9]|[1-9][0-9]|[0-9]),(100|[1-9][0-9]|[1-9][0-9]|[0-9]),(100|[1-9][0-9]|[1-9][0-9]|[0-9])\)$/;

    let matchRgb = value.match(checkRgbOrRgba);
    // 若显示透明，则只能识别rgba色彩
    if (this._showAlpha) {
      if (matchRgb) {
        this.setHsvAndAlpha(matchRgb[2], matchRgb[3], matchRgb[4], matchRgb[5]);
        return;
      }
    } else {
      if (this.format === "rgb") {
        if (matchRgb) {
          this.setHsvAndAlpha(
            matchRgb[2],
            matchRgb[3],
            matchRgb[4],
            matchRgb[5]
          );
        }
        return;
      } else if (this.format === "hex") {
        let matchHex = value.match(checkHex);
        if (matchHex) {
          let { r, g, b } = hexToRgb(matchHex[1]);
          return this.setHsvAndAlpha(r, g, b);
        }
      } else {
        let match = value.match(checkHsvOrHsl);
        if (match) {
          if (match[1] === "l") {
            let { h, s, v } = hsl2hsv(match[2], match[3], match[4]);
            return this.set({
              hue: h,
              saturation: s,
              value: v
            });
          } else {
            return this.set({
              hue: match[2],
              saturation: match[3],
              value: match[4]
            });
          }
        }
      }
    }
    this.initValue = true;
    this.setHsvAndAlpha(255, 255, 255, 1);
  }

  setHsvAndAlpha(r, g, b, a) {
    if (this._showAlpha && a) {
      this.set("alpha", +(a * 100).toFixed(0));
    }

    let { h, s, v } = rgbToHsvAndHsl(r, g, b);

    this.set({
      hue: h,
      value: v,
      saturation: s
    });
  }

  set(key, value) {
    if (arguments.length === 1) {
      for (let i in arguments[0]) {
        this.set(i, arguments[0][i]);
      }
    } else {
      this["_" + key] = value;
    }
  }

  /**
   * 返回当前颜色字符串
   */
  getColorString() {
    let { format, _showAlpha } = this;
    let { r, g, b } = hsvToRgb(this._hue, this._saturation, this._value);
    let hslString;
    if (format === "hsl") {
      let { h, s, l } = rgbToHsvAndHsl(r, g, b, true);
      hslString = `hsl(${h},${s},${l})`;
    }
    console.log(r, g, b);

    if (_showAlpha) {
      return `rgba(${r}, ${g}, ${b}, ${this._alpha / 100})`;
    } else {
      switch (format) {
        case "rgb":
          return `rgb(${r}, ${g}, ${b})`;
        case "hsv":
          return `hsv(${this._hue},${this._saturation},${this._value})`;
        case "hex":
          return rgbToHex(r, g, b);
        case "hsl":
          return hslString;
      }
    }
  }

  /**
   * 处理hsv=>rgb
   * @param {number} h
   * @param {number} s
   * @param {number} v
   * @param {boolean} toString
   */
  getRgb(
    h = this._hue,
    s = this._saturation,
    v = this._value,
    toString = false
  ) {
    let { r, g, b } = hsvToRgb(h, s, v);
    return toString ? { r, g, b } : `rgb(${r}, ${g}, ${b})`;
  }
}
