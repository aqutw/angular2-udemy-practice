export interface IBook {
  bookAuthor: string;
  bookTitle: string;
  bookPrice: number;
  bookDesc: string;
  publishedOn: Date;
  isStock: string;
  bookReviews: number;
  hardcover?: boolean;
  bookImageUrl: string;
}