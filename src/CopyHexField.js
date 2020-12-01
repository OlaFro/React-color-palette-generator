import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/CopyHexFieldStyle";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyHexField(props) {
  const { palette, classes } = props;

  const hexNumbers = palette.map((color, index) => (
    <li key={index}>{`${color.color}`}</li>
  ));
  console.log(hexNumbers);

  const readableHex = [];
  const readingValues = palette.map((color) => readableHex.push(color.color));

  return (
    <div>
      <div className={classes.copyField}>
        <ul className={classes.list}>{hexNumbers}</ul>
      </div>
      <CopyToClipboard text={`${readableHex}`}>
        <button disabled={palette.length === 0} className={classes.buttonDark}>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default withStyles(styles)(CopyHexField);
