import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementStatusDto } from './dto/update-announcement-status.dto';
import { Announcement } from './announcement.entity';

@Injectable()
export class AnnouncementsService {
  private announcements: Announcement[] = [];

  create(dto: CreateAnnouncementDto): Announcement {
    const announcement: Announcement = {
      id: Date.now().toString(),
      title: dto.title,
      description: dto.description,
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    this.announcements.push(announcement);
    return announcement;
  }

  findAll(): Announcement[] {
    return [...this.announcements].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  updateStatus(id: string, dto: UpdateAnnouncementStatusDto): Announcement {
    const announcement = this.announcements.find((a) => a.id === id);
    if (!announcement) {
      throw new NotFoundException(`Announcement with id ${id} not found`);
    }
    announcement.status = dto.status;
    return announcement;
  }
}
