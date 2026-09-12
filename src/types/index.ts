// Shared screen props
export interface ScreenProps {
  title: string;
}

// Example domain model (BookKeeper will use this soon)
export interface Book {
  id: string;
  title: string;
  author: string;
  year?: number;
}
