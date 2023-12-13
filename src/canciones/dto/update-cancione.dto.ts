import { PartialType } from '@nestjs/swagger';
import { CreateCancioneDto } from './create-cancione.dto';

export class UpdateCancioneDto extends PartialType(CreateCancioneDto) {}
