import React from "react";
import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
  operation: string;
  SelectOperation: (operation: string) => void;
  SelectedOperation: string;
}
const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(117,124,232,0.1)",
  borderColor: props.selected ? "3fff" : "rgb(117,124,232,0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  SelectedOperation,
  SelectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => SelectOperation(operation)}
        selected={SelectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
