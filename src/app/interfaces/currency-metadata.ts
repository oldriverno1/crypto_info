export interface MetaDataRequest {
  ids: string;
  attributes?: string;
  format?: 'csv' | 'JSON';
}

export interface MetaDataResponse {
  id: string;
  original_symbol: string;
  name: string;
  description: string;
  website_url: string;
  logo_url: string;
  blog_url: string;
  discord_url: string;
  facebook_url: string;
  github_url: string;
  medium_url: string;
  reddit_url: string;
  telegram_url: string;
  twitter_url: string;
  whitepaper_url: string;
  youtube_url: string;
  linkedin_url: string;
  block_explorer_url: string;
  bitcointalk_url: string;
  replaced_by: string | null;
  cryptocontrol_coin_id: string;
  used_for_pricing: boolean;
}
