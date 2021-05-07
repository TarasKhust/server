import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosResolver } from './photos.resolver';
import { Upload } from './Upload.scalar';

@Module({
  providers: [PhotosResolver, PhotosService, Upload],
})
export class PhotosModule {}
