import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  InputAdornment,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useForm, Controller } from "react-hook-form";
import TextInput from "./TextInput";

function ConsumerForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      clothing: "",
      budget: "",
      description: "",
      images: [],
    },
  });
  const onSubmit = (data) => console.log(data);
  const gridSize = 12;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            name="firstName"
            control={control}
            register={register}
            required
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
            variant="standard"
            policy={{ pattern: /^[A-Za-z',-\s]+$/ }}
            texthelper={"Invalid name"}
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            required
            control={control}
            register={register}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            policy={{ pattern: /^[A-Za-z',-\s]+$/ }}
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            required
            control={control}
            register={register}
            texthelper="Invalid email"
            id="email"
            name="email"
            label="Email address"
            fullWidth
            autoComplete="email"
            variant="standard"
            type="email"
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            required
            control={control}
            register={register}
            texthelper="Invalid mobile number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+61</InputAdornment>
              ),
            }}
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile number"
            fullWidth
            autoComplete="mobile"
            variant="standard"
            policy={{ pattern: /^[0-9]{9}$/ }}
          />
        </Grid>
        <Grid item xs={gridSize}>
          <TextInput
            required
            control={control}
            register={register}
            id="addressLine1"
            name="addressLine1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={gridSize}>
          <TextInput
            control={control}
            register={register}
            id="addressLine2"
            name="addressLine2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            required
            control={control}
            register={register}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select
              required
              control={control}
              {...register("state")}
              labelId="state"
              id="state"
              label="State"
              defaultValue=""
              name="state"
            >
              <MenuItem value={"ACT"}>ACT</MenuItem>
              <MenuItem value={"NSW"}>NSW</MenuItem>
              <MenuItem value={"TAS"}>TAS</MenuItem>
              <MenuItem value={"QLD"}>QLD</MenuItem>
              <MenuItem value={"VIC"}>VIC</MenuItem>
              <MenuItem value={"WA"}>WA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            required
            control={control}
            register={register}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            texthelper="Invalid postal code"
            policy={{ pattern: /^[0-9]{4}$/ }}
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Clothing</InputLabel>
            <Select
              required
              name="clothing"
              labelId="clothing"
              id="clothing"
              label="Clothing"
              defaultValue=""
              {...register("clothing")}
            >
              <MenuItem value={"dress"}>Dress</MenuItem>
              <MenuItem value={"ethnic"}>Ethnic Wear</MenuItem>
              <MenuItem value={"blouse"}>Blouse</MenuItem>
              <MenuItem value={"formal"}>Formal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <TextInput
            control={control}
            register={register}
            id="budget"
            name="budget"
            label="Budget (optional)"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">AUD</InputAdornment>
              ),
            }}
            type="number"
          />
        </Grid>
        <Grid item xs={gridSize} sm={6}>
          <Controller
            name="images"
            control={control}
            render={({ field, fieldState: { invalid } }) => {
              return (
                <MuiFileInput
                  {...field}
                  ref={null}
                  multiple
                  label="Upload image (optional)"
                  inputProps={{ accept: "image/png, image/jpeg" }}
                  helperText={invalid ? "File is invalid" : ""}
                  error={invalid}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={gridSize}>
          <TextInput
            control={control}
            register={register}
            multiline
            id="description"
            name="description"
            label="Description (optional)"
            fullWidth
            autoComplete="description"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit" sx={{ mt: 3, ml: 1 }}>
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default ConsumerForm;
