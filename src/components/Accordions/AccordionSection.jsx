

import React from 'react';
import './AccordionSection.css';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';


function AccordionSection({ id, onClick }) {
  return (
    <div>
      <Accordion id={id} className="custom-accordion">
        <AccordionSummary
          className="accordion-summary"
          expandIcon={<span>Icon</span>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionSection;
