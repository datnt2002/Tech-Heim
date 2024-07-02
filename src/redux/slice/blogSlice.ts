import {
  getBlogAPI,
  getDetailBlogAPI,
  getNewsBlogAPI,
  getVideoBlogAPI,
} from "../../services/blog.service";
import { Blog, VideoBlog } from "../../types/Blog";
import { createAppSlice } from "../appSlice";

interface BlogState {
  blogsPost: Blog[];
  videoBlogsPost: VideoBlog[];
  newBlogPost: Blog[];
  detailBlogPost: Blog | null;
  loading: boolean;
}

const initialState: BlogState = {
  blogsPost: [],
  videoBlogsPost: [],
  newBlogPost: [],
  detailBlogPost: null,
  loading: false,
};

export const blogSlice = createAppSlice({
  name: "blog",
  initialState,
  reducers: (create) => ({
    getBlogThunk: create.asyncThunk(getBlogAPI, {
      pending: (state) => {
        console.log(state);
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          blogsPost: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getVideoBlogThunk: create.asyncThunk(getVideoBlogAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          videoBlogsPost: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getNewBlogThunk: create.asyncThunk(getNewsBlogAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          newBlogPost: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getDetailBlogThunk: create.asyncThunk(
      async (id: string) => {
        const data = await getDetailBlogAPI(id);
        return { data, id };
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data } = action.payload;
          return {
            ...state,
            loading: false,
            blogsPost: data,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
  }),
});

export const {
  getBlogThunk,
  getVideoBlogThunk,
  getNewBlogThunk,
  getDetailBlogThunk,
} = blogSlice.actions;
export default blogSlice.reducer;
