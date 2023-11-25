import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Module({
	providers: [CoinsService]
})
export class CoinsModule {}
