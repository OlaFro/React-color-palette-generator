# React Color Palette Generator 🌈

## Features:

- ✅ React hooks
- ✅ Color picker from React-Color library
- ✅ Palette with flexbox and limited amount of colors
- ✅ Color shades from chroma.js library
- ✅ Dynamic text color based on background luminancy (using chroma.js)
- ✅ Copy to Clipboard from react-copy-to-clipboard library
- ✅ unique IDs from uuid library
- ✅ drag and drop from react-sortable-hoc library
- ✅ snackbar (info display after copy) from material-ui library
- ✅ withStyles from material-ui library (JSS on Higher Order Components)
- ✅ the app is responsive

## Bugs:

- 🐛 Copy Hex field doesn't update after changing color to a shade. An attempt
  to solve this is commented out in the DraggableColorBox component in the lines
  50-52. Unfortunately unsuccessful right now.
- 🐛 User can add the same color multiple times if the color picker doesn't
  change the position between pushing the button "Add". The same colors have the
  same ID, so they are all deleted at the same time. Solution -> disabling the
  possibility to add the same color twice.
- 🐛 Different style on 'a' tag in the color menu (pseudo 'button' for move). A
  href has been used on purpose, to inform user about the drag-and-drop
  functonality and give him a possibility to drag from the place with the
  button. But native button element is clickable, so "a" tag was used. For now
  it has different style on hover.
- 🐛 drag and drop working not properly in the Firefox

## Future implementations:

- 🚀 Adding option to save the palette
- 🚀 Side menu/another route that shows saved palette
- 🚀 An option to download the palette in jpg/svg
- 🚀 Offering to copy the color codes in other formats than only HEX (rgb, rgba)
- 🚀 Refractoring styles component with makeStyles(solution for hooks), instead
  of withStyle
- 🚀 changing the library to drag-and-drop because of the deprication warnings
  in the console
