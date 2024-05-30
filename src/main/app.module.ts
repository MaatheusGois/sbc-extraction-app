import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { ElectronModule } from '@doubleshot/nest-electron'
import { BrowserWindow, app } from 'electron'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SearchService } from './search.service'
import { ExtractionService } from './extraction.service'
import { NestCrawlerModule } from 'nest-crawler';

@Module({
  imports: [
    NestCrawlerModule,
    ElectronModule.registerAsync({
    useFactory: async () => {
      const isDev = !app.isPackaged
      const win = new BrowserWindow({
        width: 1100,
        height: 900,
        autoHideMenuBar: true,
        webPreferences: {
          contextIsolation: true,
          preload: join(__dirname, '../preload/index.js'),
        },
        icon: join(__dirname, 'assets/sbc-extraction.ico')
      })

      win.webContents.openDevTools()

      win.on('closed', () => {
        win.destroy()
      })

      const URL = isDev
        ? process.env.DS_RENDERER_URL
        : `file://${join(app.getAppPath(), 'dist/render/index.html')}`

      win.loadURL(URL)

      return { win }
    },
  })],
  controllers: [AppController],
  providers: [AppService, SearchService, ExtractionService],
})
export class AppModule { }
