import { FC, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { conversionStrategies } from "../../lib/Converter";
import { ConversionHandler } from "../../lib/ConversionHandler";
import { ConsoleLogger, NoLogger } from "../../lib/Logger";

const TemperatureConverter: FC = () => {
  const [value, setValue] = useState<number>(32);
  const [conversionType, setConversionType] = useState<"CtoF" | "FtoC">("FtoC");
  const [loggingEnabled, setLoggingEnabled] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const handleConvert = () => {
    const converter = conversionStrategies[conversionType];
    const logger = loggingEnabled ? new ConsoleLogger() : new NoLogger();
    const handler = new ConversionHandler(converter, logger);

    const convertedValue = handler.performConversion(value);
    setResult(`${convertedValue}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ maxWidth: 400, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Temperature Converter
          </Typography>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Enter Temperature"
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              variant="outlined"
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="convert-from-label">Convert From</InputLabel>
            <Select
              labelId="convert-from-label"
              value={conversionType}
              onChange={(e) =>
                setConversionType(e.target.value as "CtoF" | "FtoC")
              }
              label="Convert From"
            >
              <MenuItem value="FtoC">Fahrenheit to Celsius</MenuItem>
              <MenuItem value="CtoF">Celsius to Fahrenheit</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={loggingEnabled}
                onChange={(e) => setLoggingEnabled(e.target.checked)}
                color="primary"
              />
            }
            label="Enable Logging"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleConvert}
            sx={{ mt: 2 }}
          >
            Convert
          </Button>

          {result && (
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, color: "primary.main" }}
            >
              {result}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TemperatureConverter;
