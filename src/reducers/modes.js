const darkModescolors = {
  background: "#1c1b22",
  color: "#fffafa",
  questionBg: "#2B2A33",
  sideBarUlWrapperBg: "#2B2A33",
  borderColor: "#4E9FE7",
};
const whiteModecolors = {
  background: "",
  color: "",
  questionBg: "",
  borderColor: "#D2D3E7",
  sideBarUlWrapperBg: "",
};

const userModes = {
  darkModes: false,
  themeColors: "",
  modeText: "Dark Mode",
};
console.log(userModes, "initial state");

const modes = (state = userModes, action) => {
  switch (action.type) {
    case "TOGGLE_MODES":
      return {
        // ...state,
        darkModes: !state.darkModes,
        themeColors:
          state.darkModes == false ? darkModescolors : whiteModecolors,
        modeText: state.darkModes == false ? "White Mode" : "Dark Mode",
        log: (() => {
          console.log(document.URL, "yes");
        })(),
      };
    default:
      return state;
  }
};

export default modes;
