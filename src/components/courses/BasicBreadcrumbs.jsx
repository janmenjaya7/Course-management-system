import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{ fontSize: '12px', fontFamily: 'Open Sans', color: '#252D41' }}
      >
        <Link underline="hover" color="inherit" href="/">
          AllCourses
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Python
        </Link>
        <Typography sx={{ fontSize: '12px' }} color="text.primary">
          Java
        </Typography>
      </Breadcrumbs>
    </div>
  )
}
