import { getBlogAPI } from "../../services/blog.service";
import { Blog } from "../../types/Blog";
import { createAppSlice } from "../appSlice";

interface BlogState {
  blogsPost: Blog[];
  loading: boolean;
}

const initialState: BlogState = { blogsPost: [], loading: false };

export const blogSlice = createAppSlice({
  name: "blogs",
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
          blogs: data,
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
  }),
});

export const { getBlogThunk } = blogSlice.actions;
export default blogSlice.reducer;
