import {
  getBlogDetailAPI,
  getListBlogAPI,
  getListNewBlogsAPI,
  getListVideoBlogAPI
} from '../../services/blog.service'
import { Blog, VideoBlog } from '../../types/Blog'
import { createAppSlice } from '../appSlice'

interface BlogState {
  listBlogs: Blog[]
  listvideoBlogsPost: VideoBlog[]
  listNewBlogPost: Blog[]
  detailBlogPost: Blog | null
  loading: boolean
}

const initialState: BlogState = {
  listBlogs: [],
  listvideoBlogsPost: [],
  listNewBlogPost: [],
  detailBlogPost: null,
  loading: false
}

export const blogSlice = createAppSlice({
  name: 'blog',
  initialState,
  reducers: (create) => ({
    getListBlogThunk: create.asyncThunk(getListBlogAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload
        return {
          ...state,
          loading: false,
          listBlogs: data,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),
    getListNewBlogsThunk: create.asyncThunk(getListNewBlogsAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload
        return {
          ...state,
          loading: false,
          listNewBlogPost: data,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),
    getListVideoBlogsThunk: create.asyncThunk(getListVideoBlogAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload
        return {
          ...state,
          loading: false,
          listvideoBlogsPost: data,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),
    getBlogDetailThunk: create.asyncThunk(
      async (blogID: number) => {
        const res = await getBlogDetailAPI(blogID)
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            detailBlogPost: data,
            status: status
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    )
  })
})

export const {
  getListBlogThunk,
  getBlogDetailThunk,
  getListNewBlogsThunk,
  getListVideoBlogsThunk
} = blogSlice.actions
export default blogSlice.reducer
