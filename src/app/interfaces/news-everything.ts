export interface Source {
  id: null;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface NewsEverythingResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface NewsEverythingRequest {
  apiKey: string;
  q: string;
  qInTitle?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  /**A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-10-02 or 2021-10-02T07:31:56) */
  from?: string;
  /**A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-10-02 or 2021-10-02T07:31:56) */
  to?: string;
  /**The 2-letter ISO-639-1 code of the language you want to get headlines for. */
  language?: string;
  /**
   * relevancy = articles more closely related to q come first.
   * popularity = articles from popular sources and publishers come first.
   * publishedAt = newest articles come first. */
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
}
