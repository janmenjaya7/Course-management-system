import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './MyTabs.css'

export default function MyTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className="tabInside" sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#262626',
          },
          '& .Mui-selected': {
            color: '#262626',
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
          },
        }}
      >
        <Tab value={0} label="Syllabus" sx={{ textTransform: 'capitalize' }} />
        <Tab value={1} label="Overview" />
        <Tab value={2} label="Forum" />
        <Tab value={3} label="FAQs" />
      </Tabs>
    </Box>
  )
}
