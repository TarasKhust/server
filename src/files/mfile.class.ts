export class MFile {
	originalname: string;

	buffer: Buffer;

	constructor(private file: { originalname: string; buffer: Buffer }) {
		this.originalname = file.originalname;
		this.buffer = file.buffer;
	}
}
