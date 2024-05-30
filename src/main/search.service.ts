import { Injectable } from '@nestjs/common';
import { ExtractionService } from './extraction.service';
import { ExtractionDTO } from './extraction.dto';
import { FormDTO } from './form.dto';

@Injectable()
export class SearchService {

    constructor(
        private readonly extractorService: ExtractionService,
    ) { }

    async searchBy(wordSearch: FormDTO): Promise<ExtractionDTO[]> {
        return this.extractorService.getAll(wordSearch)
    }
}
