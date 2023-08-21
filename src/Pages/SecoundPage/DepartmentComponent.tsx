import React, { useState } from 'react';
import { Collapse, Checkbox, List, ListItem, ListItemText } from '@mui/material';

interface SubDepartmentProps {
  subDepartments: string[];
  onSubDepartmentToggle: (subDepartment: string) => void;
}

const SubDepartmentList: React.FC<SubDepartmentProps> = ({ subDepartments, onSubDepartmentToggle }) => {
  return (
    <List>
      {subDepartments.map(subDept => (
        <ListItem key={subDept} dense button onClick={() => onSubDepartmentToggle(subDept)}>
          <Checkbox edge="start" tabIndex={-1} disableRipple />
          <ListItemText primary={subDept} />
        </ListItem>
      ))}
    </List>
  );
};

interface DepartmentProps {
  department: {
    department: string;
    subDepartments: string[];
  };
}

const DepartmentComponent: React.FC<DepartmentProps> = ({ department }) => {
  const [expanded, setExpanded] = useState(false);
  const [subDepartments, setSubDepartments] = useState<boolean[]>(department.subDepartments.map(() => false));
  const [selectAll, setSelectAll] = useState(false);

  const handleSubDepartmentToggle = (subDepartment: string) => {
    const index = department.subDepartments.indexOf(subDepartment);
    const updatedSubDepartments = [...subDepartments];
    updatedSubDepartments[index] = !updatedSubDepartments[index];
    setSubDepartments(updatedSubDepartments);
    if (updatedSubDepartments.every(subDept => subDept)) {
      setSelectAll(true);
    } else if (selectAll) {
      setSelectAll(false);
    }
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDepartmentToggle = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSubDepartments(subDepartments.map(() => newSelectAll));
  };

  return (
    <div>
      <ListItem button onClick={handleToggleExpand}>
        <Checkbox edge="start" checked={selectAll} tabIndex={-1} disableRipple onClick={handleDepartmentToggle} />
        <ListItemText primary={department.department} />
      </ListItem>
      <Collapse in={expanded}>
        <SubDepartmentList subDepartments={department.subDepartments} onSubDepartmentToggle={handleSubDepartmentToggle} />
      </Collapse>
    </div>
  );
};

export default DepartmentComponent;
