/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist/electron',
  },
  publish: null,
  npmRebuild: false,
  compression: "maximum",
  files: [
    'dist/main/**/*',
    'dist/preload/**/*',
    'dist/render/**/*',
  ],
  appId: 'com.maatheusgois.sbc.extraction',
  mac: {
    target: 'dmg',
    icon: 'assets/sbc-extraction.icns'
  },
  win: {
    icon: 'assets/sbc-extraction.ico'
  },
  linux: {
    target: 'AppImage',
    icon: 'assets/sbc-extraction.icns'
  },
}

module.exports = config
