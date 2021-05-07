import { Injectable } from '@nestjs/common';
import path = require('path');
import { path as pathRoot } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {

	async saveFiles(files: MFile[]): Promise<string[]> {
		const dateFolder = 'images';
		const uploadFolder = `${pathRoot}/uploads/${dateFolder}`;
		await ensureDir(uploadFolder);
		const res: string[] = [];

		for (const file of files) {
			const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
			const extension: string = path.parse(file.originalname).ext;
			await writeFile(`${uploadFolder}/${filename}${extension}`, file.buffer);
			res.push(`/uploads/${dateFolder}/${filename}${extension}`);
		}

		return res;
	}

	convertToWebP(file: Buffer): Promise<Buffer> {
		return sharp(file)
			.webp()
			.toBuffer();
	}
}
