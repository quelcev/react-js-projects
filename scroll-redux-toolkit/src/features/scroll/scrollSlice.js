import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toggleLinksHeight } from "../navbar/navbarSlice";

export const handleScroll = createAsyncThunk(
  "scroll/handleScroll",
  async ({ event, onPageLoad, hash }, thunkAPI) => {
    const { navbar } = thunkAPI.getState();
    thunkAPI.dispatch(toggleLinksHeight(0));
    return { event, onPageLoad, hash, navbar };
  }
);

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    refs: {
      homeRef: null,
      aboutRef: null,
      servicesRef: null,
      contactRef: null,
      navRef: null,
    },
    showBackToTopBtn: false,
  },
  reducers: {
    setRef: (state, action) => {
      const { name, ref } = action.payload;
      state.refs[name] = ref;
    },
    toggleShowBackToTopBtn: (state, action) => {
      state.showBackToTopBtn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      handleScroll.fulfilled,
      (state, { payload: { event, onPageLoad, hash, navbar } }) => {
        let href = "";
        let timeout = 0;
        if (onPageLoad) {
          href = hash;
          timeout = 700;
        } else {
          event.preventDefault();
          href = event.target.getAttribute("href");
        }
        history.pushState({}, "", href);
        const refOptions = {
          "#home": state.refs.homeRef,
          "#about": state.refs.aboutRef,
          "#services": state.refs.servicesRef,
          "#contact": state.refs.contactRef,
        };
        const element = refOptions[href].current;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const navHeight =
          state.refs.navRef.current.getBoundingClientRect().height;
        let offset = navHeight;
        if (navbar.linksHeight > 0 && navbar.navbarFixed) {
          offset -= navbar.linksHeight;
        }
        const offsetPosition = elementPosition - offset;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, timeout);
      }
    );
  },
});

export const { setRef, toggleShowBackToTopBtn } = scrollSlice.actions;

export default scrollSlice.reducer;
