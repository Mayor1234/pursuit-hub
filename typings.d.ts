type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  comments: Comment[];
  mainImage: Image_2;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image_2;
  name: string;
  slug: SlugInput;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Youtube {
  _type: 'youtube';
  url: string;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}

export interface Post {
  _id: string;
  publishedAt: string;
  createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: {
    title: string;
    description: string;
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  publishedAt: string;
  createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
