
import { InputType, Field } from '@nestjs/graphql';
import { Upload } from '../Upload.scalar';

@InputType()
export class UploadUserProfilePicInput {
	@Field()
	file : Upload;
}
