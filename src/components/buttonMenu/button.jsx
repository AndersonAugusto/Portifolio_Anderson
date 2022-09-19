import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './button.scss'
import { Link } from 'react-router-dom'
export default function ButtonMenu(props) {

  return (
    <Stack direction="row" spacing={2}>
         <Link to={ props.href }> 
            <Button className="buttonMenu" variant="contained">
            { props.name } 
            </Button>
        </Link>
    </Stack>
  );
}