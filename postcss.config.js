module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [
        /^#category$/,
        /.category-menu/,
        /.menu-item/,
        /^.content-left$/,
        /^.content-right$/
      ],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/TabBar/, /Profile/, /ListView/, /UserInfo/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 667
    }
  }
}
