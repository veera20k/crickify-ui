export interface Article {
    id: number;
    title: string;
    summary: string;
    byline: string;
    genreType: string;
    publishedAt: string;
    image: {
      url: string;
      width: number;
      height: number;
      caption: string;
    };
    language: string;
  }
