import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function AccordionSection() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<>Icon</>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionSection
