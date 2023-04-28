import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function TextInput(props) {
  const { control, name, register, policy, texthelper } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { invalid } }) => {
        return (
          <TextField
            {...props}
            error={invalid}
            {...register(name, policy)}
            helperText={invalid ? texthelper : ""}
          />
        );
      }}
    />
  );
}

export default TextInput;
