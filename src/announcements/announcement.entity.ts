// announcement.entity.ts
export interface Announcement {
  id: string;
  title: string;
  description?: string;
  status: 'active' | 'closed';
  createdAt: string;
}
