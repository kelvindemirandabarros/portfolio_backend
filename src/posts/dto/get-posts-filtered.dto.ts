import { IsOptional, IsString } from 'class-validator';

export class GetPostsFilteredDto {
  @IsOptional()
  @IsString()
  search?: string;
}
