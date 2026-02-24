export interface MastodonStatus {
  id: string;
  uri: string;
  content: string;
  created_at: string;
  account: {
    avatar: string;
    display_name: string;
  };
  media_attachments?: Array<{
    type: string;
    url: string;
  }>;
}
