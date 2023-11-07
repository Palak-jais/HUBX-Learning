import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle,ButtonDropdown,UncontrolledDropdown} from "reactstrap";
import React,{useState} from 'react';
import styles from '../ui.module.css';

export default function DropdownPage(){
    //direction="left"/"right"/"up"/"down"
    //dark -for dark bg options
    //uncontrolled not require states
    
    const[open1,setOpen1]=useState(false);
    const toggle1=()=>{
        setOpen1(!open1);
    }
    const[open2,setOpen2]=useState(false);
    const toggle2=()=>{
        setOpen2(!open2);
    }
    return<>
    <h2 className={styles.header}>Dropdowns</h2>
    <div className={styles.stuffs}>
    <Dropdown toggle={toggle1} isOpen={open1}>
    <DropdownToggle caret color="danger">Dropdown1</DropdownToggle>
        <DropdownMenu dark>
        <DropdownItem>Item1</DropdownItem>
        <DropdownItem>Item2</DropdownItem>
        <DropdownItem>Item3</DropdownItem>
        <DropdownItem>Item4</DropdownItem>        
    </DropdownMenu>   
    </Dropdown>
    <ButtonDropdown toggle={toggle2} isOpen={open2} direction="left">
    <DropdownToggle caret>Dropdown2</DropdownToggle>
        <DropdownMenu>
        <DropdownItem>Item1</DropdownItem>
        <DropdownItem>Item2</DropdownItem>
        <DropdownItem>Item3</DropdownItem>
        <DropdownItem>Item4</DropdownItem>        
    </DropdownMenu>   
    </ButtonDropdown>
    <UncontrolledDropdown
    className="me-2"
    direction="down"
  >
    <DropdownToggle
      caret
      color="primary"
    >
      Dropdown3
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>
        Header3
      </DropdownItem>
      <DropdownItem disabled>
        Action
      </DropdownItem>
      <DropdownItem>
        Another Action
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Another Action
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
    </div>
    </>
}