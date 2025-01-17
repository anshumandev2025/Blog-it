import { defineQuery } from "next-sanity";

export const FETCH_BLOG_QUERY =
  defineQuery(`*[_type=="blog" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search]| order(_createdAt desc){
  _id,
    title,
    description,
    category,
    image,
    views,
    slug,
    _createdAt,
    author->{
      name,email,image
    }
}`);

export const FETCH_BLOG_CONTENT_BY_ID_QUERY =
  defineQuery(`*[_type=="blog" && _id==$id][0]{
    _id,
    title,
    description,
    category,
    image,
    views,
    _createdAt,
    content,
    author->{
      name,email,image
    }
}`);

export const BLOG_VIEWS_QUERY = defineQuery(`
  *[_type == "blog" && _id == $id][0]{
      _id, views
  }
`);

export const FETCH_PERSONAL_BLOG_QUERY =
  defineQuery(`*[_type=="blog" && defined(slug.current)] | order(_createdAt desc){
    _id,
    title,
    description,
    category,
    image,
    views,
    slug,
    _createdAt,
    author->{
      name,email,image
    }
}`);

export const FETCH_AUTHOR_DETAILS_BY_EMAIL_QUERY =
  defineQuery(`*[_type=="author" && email==$email][0]{
    _id,
    name,
    image,
    email,
    image
}`);
