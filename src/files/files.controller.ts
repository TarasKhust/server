import { Controller, Get, HttpCode, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import path = require('path');
import { join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { MFile } from './mfile.class';

export const storage = {
	storage: diskStorage({
		destination: './uploads/images',
		filename: (req, file, cb) => {
			const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
			const extension: string = path.parse(file.originalname).ext;

			cb(null, `${filename}${extension}`);
		},
	}),

};

@Controller('files')
export class FilesController {
	constructor(
		private readonly filesService: FilesService
	) { }

	@Post('upload')
	@HttpCode(200)
	@UseInterceptors(FileInterceptor('image'))
	async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string[]> {
	const saveArray: MFile[] = [new MFile(file)];

	/*
	 * if (file.mimetype.includes('image')) {
	 * 	const buffer = await this.filesService.convertToWebP(file.buffer);
	 *
	 * 	saveArray.push(new MFile({
	 * 	originalname: `${file.originalname.split('.')[0]}.webp`,
	 * 		buffer,
	 * 	}));
	 * }
	 */

	return this.filesService.saveFiles(saveArray);
	}

	@Get('images/:imageName')
	findImage(@Param('imageName') imageName: string, @Res() res: any): Observable<Object> {
	return of(res.sendFile(join(process.cwd(), `uploads/images/${ imageName}`)));
	}

}
