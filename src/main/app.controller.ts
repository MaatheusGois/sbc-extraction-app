import { Controller } from '@nestjs/common'
import { IpcHandle, Window } from '@doubleshot/nest-electron'
import { Payload } from '@nestjs/microservices'
import { type Observable, of } from 'rxjs'
import type { BrowserWindow } from 'electron'
import { AppService } from './app.service'
import { FormDTO } from './form.dto'
import { SearchService } from './search.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Window() private readonly mainWin: BrowserWindow,
    private readonly searchService: SearchService,
  ) { }

  @IpcHandle('msg')
  public async handleSendMsg(@Payload() msg: FormDTO): Promise<Observable<string>> {
    const forms: FormDTO = msg//JSON.parse(msg);
    const results = await this.searchService.searchBy(forms)
    console.log('results:', results)
    // const { webContents } = this.mainWin
    const jsonString = JSON.stringify(results);

    // webContents.send('reply-msg', 'this is msg from webContents.send')
    return of(jsonString)
  }
}
