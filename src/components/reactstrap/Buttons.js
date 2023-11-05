import React from "react";
import { Button } from "reactstrap";
export default function Buttons(){
    return <>
    <div>
<h2>Buttons using Reactstrap</h2>
  <Button color="primary">
    primary
  </Button>
  {' '}
  <Button>
    secondary
  </Button>
  {' '}
  <Button color="success" outline>
    success
  </Button>
  {' '}
  <Button color="info" size="lg">
    info
  </Button>
  {' '}
  <Button color="warning" close>
    
  </Button>
  {' '}
  <Button color="danger" disabled>
    danger
  </Button>
  {' '}
  <Button color="link" >
    link
  </Button>
</div>
    </>
}