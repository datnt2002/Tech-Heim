import { Comment } from './Comment'

export type Blog = {
  id: string
  title: string
  author: string
  readTime: string
  tags: []
  releaseDate: Date
  content: string
  image: string
  comment?: Comment[]
}

export type VideoBlog = {
  id: number
  title: string
  url: string
  image: string
}
