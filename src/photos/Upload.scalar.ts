import { Scalar } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

@Scalar('Uploads')
export class Upload {
	description = 'File upload scalar type';

	parseValue(value: string): string{
		return GraphQLUpload.parseValue(value);
	}

	serialize(value: string): string{
		return GraphQLUpload.serialize(value);
	}

	parseLiteral(ast: any): string{
		return GraphQLUpload.parseLiteral(ast, ast.value);
	}
}
