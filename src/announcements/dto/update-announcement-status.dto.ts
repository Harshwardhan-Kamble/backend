// update-announcement-status.dto.ts
import { IsIn } from 'class-validator';

export class UpdateAnnouncementStatusDto {
  @IsIn(['active', 'closed'])
  status: 'active' | 'closed';
}
