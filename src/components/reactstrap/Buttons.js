import React from "react";
import { Button } from "reactstrap";
import styles from '../ui.module.css'
export default function Buttons(){
    return <>
    <h2 className={styles.header}>Buttons using Reactstrap</h2>
    <div className={styles.stuffs}>

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