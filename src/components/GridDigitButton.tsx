import { Button, Grid, styled } from "@mui/material";

interface GridDigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  xs?: number;
}
const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(245,241,73,0.1)",
  borderColor: props.selected ? "3fff" : "rgb(245,241,73,0.5)",
}));

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
  digit,
  enterDigit,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <StyledButton selected fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </StyledButton>
    </Grid>
  );
};
