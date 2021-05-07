import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PhotosService } from './photos.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { UserUploadProfilePicType } from './user.type';
import { UploadUserProfilePicInput } from './dto/user.input';

@Resolver()
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

	@Mutation(() => Boolean)
	async multipleUpload(@Args({ name: 'files', type: () => GraphQLUpload })
						 {
							 createReadStream,
							 filename,
						 }: FileUpload): Promise<boolean> {
		return new Promise(async (resolve, reject) =>
			createReadStream()
				.pipe(createWriteStream(`./uploads/${filename}`))
				.on('finish', () => resolve(true))
				.on('error', () => reject(false))
		);
	}

	@Mutation(returns => UserUploadProfilePicType)
	public async uploadProfilePic(@Args('UploadUserProfilePicInput') { file } : UploadUserProfilePicInput){
		const fileData = await file;

		console.log(fileData);

		///Do something with the fileData
	}

}
