import React from 'react';
import { List } from '@mui/material';
import DepartmentComponent from './DepartmentComponent';
import { departments } from './departmentsData'; // Import your department data from the file

const MainDept: React.FC = () => {
  return (
    <List>
      {departments.map((dept, index) => (
        <DepartmentComponent key={index} department={dept} />
      ))}
    </List>
  );
};

export default MainDept;
