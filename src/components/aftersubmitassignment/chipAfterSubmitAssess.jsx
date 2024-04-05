import React from 'react';
import { Chip, Stack } from '@mui/material';
import { TimelineDot } from '@mui/lab';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1} sx={{ marginTop: "16px", marginLeft: "25px", display: "flex" }}>
      <Chip
        icon={<TimelineDot sx={{ fontSize: '0.2rem', backgroundColor: "#3AA2A0", marginTop: "10px" }} />}
        label="Completed"
        sx={{ backgroundColor: "#D7ECEC", fontFamily: "Open Sans" }}
      />
    </Stack>
  );
}
