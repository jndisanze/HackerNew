export interface Weather {
  hits?: (HitsEntity)[] | null;
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}
export interface HitsEntity {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string | null;
  comment_text?: null;
  num_comments: number;
  story_id?: null;
  story_title?: null;
  story_url?: null;
  parent_id?: null;
  created_at_i: number;
  _tags?: (string)[] | null;
  objectID: string;
  _highlightResult: HighlightResult;
}
export interface HighlightResult {
  title: TitleOrUrl;
  url: Url;
  author: AuthorOrStoryTextOrUrl;
  story_text?: AuthorOrStoryTextOrUrl1 | null;
}
export interface TitleOrUrl {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords?: (string)[] | null;
}
export interface Url {
  value: string;
  matchLevel: string;
  fullyHighlighted?: boolean | null;
  matchedWords?: (string | null)[] | null;
}
export interface AuthorOrStoryTextOrUrl {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}
export interface AuthorOrStoryTextOrUrl1 {
  value: string;
  matchLevel: string;
  matchedWords?: (null)[] | null;
}
