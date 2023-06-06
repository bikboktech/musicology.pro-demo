import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled((props: any) => <TextField {...props} />)(
  ({ theme }) => ({
    // color: theme.palette.primary.main,
    backgroundColor: "rgb(54, 54, 54)",
    // "& .MuiInputBase-root": {
    //   color: theme.palette.primary.main,
    // },
    // "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    //   color: theme.palette.text.secondary,
    //   opacity: "0.8",
    // },
    // "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    //   color: theme.palette.text.secondary,
    //   opacity: "1",
    // },
    // "& .MuiOutlinedInput-input": {
    //   "&:focus": {
    //     outlineColor: theme.palette.secondary.main,
    //   },
    // },
    // "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    //   borderColor: theme.palette.grey[200],
    // },
  })
);

export default CustomTextField;
