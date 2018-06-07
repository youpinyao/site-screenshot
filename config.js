module.exports = {
  viewport: {
    mobile: {
      width: 750 / 2, // <number> page width in pixels.
      height: 1334 / 2, // <number> page height in pixels.
      deviceScaleFactor: 2, // <number> Specify device scale factor (can be thought of as dpr). Defaults to 1.
      isMobile: true, // <boolean> Whether the meta viewport tag is taken into account. Defaults to false.
      hasTouch: true, // <boolean> Specifies if viewport supports touch events. Defaults to false
      isLandscape: false, // <boolean> Specifies if viewport is in landscape mode. Defaults to false.
    },
    pc: {
      width: 1920, // <number> page width in pixels.
      height: 1080, // <number> page height in pixels.
      deviceScaleFactor: 1, // <number> Specify device scale factor (can be thought of as dpr). Defaults to 1.
      isMobile: false, // <boolean> Whether the meta viewport tag is taken into account. Defaults to false.
      hasTouch: false, // <boolean> Specifies if viewport supports touch events. Defaults to false
      isLandscape: false, // <boolean> Specifies if viewport is in landscape mode. Defaults to false.
    }
  },
  userAgent: {
    mobile: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    pc: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36',
  },
}
