import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateIssueDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  house: Types.ObjectId;

  @ApiProperty()
  logger: Types.ObjectId;

  @ApiProperty()
  resolved: boolean;
}
