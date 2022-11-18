import React, { useState } from "react";
import { Grid, Button, Paper, styled, Container } from "@mui/material";
import { GridOperationButton } from "./components/GridOperationButton";
import { GridDigitButton } from "./components/GridDigitButton";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const clear = () => {
    setPreviousValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };
  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };
  const percent = () => {
    const current = parseFloat(currentValue);
    setCurrentValue((current / 100).toString());
  };

  const calculate = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    let result;
    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "/":
        result = previous / current;
        break;
      case "*":
        result = previous * current;
        break;
      case "-":
        result = previous - current;
        break;
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPreviousValue("");
    setOperation("");
    setOverwrite(true);
  };

  const selectOperation = (operation: string) => {
    if (previousValue) {
      const value = calculate();
      setCurrentValue(`${value}`);
      setPreviousValue(`${value}`);
    } else {
      setPreviousValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit == ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container spacing={1} columnSpacing={1}>
            <GridOperationButton
              operation={"AC"}
              SelectOperation={clear}
              SelectedOperation={operation}
            />

            <GridOperationButton
              operation={"C"}
              SelectOperation={del}
              SelectedOperation={operation}
            />

            <GridOperationButton
              operation={"%"}
              SelectOperation={percent}
              SelectedOperation={operation}
            />

            <GridOperationButton
              operation={"/"}
              SelectOperation={selectOperation}
              SelectedOperation={operation}
            />
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"7"} enterDigit={setDigit} />
              <GridDigitButton digit={"8"} enterDigit={setDigit} />
              <GridDigitButton digit={"9"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"*"}
                SelectOperation={selectOperation}
                SelectedOperation={operation}
              />
            </Grid>

            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"4"} enterDigit={setDigit} />
              <GridDigitButton digit={"5"} enterDigit={setDigit} />
              <GridDigitButton digit={"6"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"-"}
                SelectOperation={selectOperation}
                SelectedOperation={operation}
              />
            </Grid>

            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"1"} enterDigit={setDigit} />
              <GridDigitButton digit={"2"} enterDigit={setDigit} />
              <GridDigitButton digit={"3"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"+"}
                SelectOperation={selectOperation}
                SelectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"0"} enterDigit={setDigit} xs={6} />
              <GridDigitButton digit={"."} enterDigit={setDigit} />
              <Grid item xs={3}>
                <Button fullWidth variant="contained" onClick={equals}>
                  {" "}
                  ={" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}
export default App;
