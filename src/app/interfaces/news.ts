export interface NewsResponse {
  pagination: Pagination;
  data: NewsData[];
}

export interface NewsData {
  author: null | string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: null | string;
  category: string;
  language: string;
  country: string;
  published_at: Date;
}

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface NewsRequest {
  date: string;
  sources?: string;
  categories?: string;
  countries?: string;
  languages?: string;
  keywords?: string;
  sort?: string;
  limit?: number;
  offset?: string;
}
