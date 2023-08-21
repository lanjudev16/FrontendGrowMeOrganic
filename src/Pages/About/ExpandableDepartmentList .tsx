import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Department {
  department: string;
  sub_departments: string[];
}

interface ExpandableDepartmentListProps {
  departments: Department[];
}

const ExpandableDepartmentList: React.FC<ExpandableDepartmentListProps> = ({
  departments,
}) => {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    setOpenDepartments((prevOpen) =>
      prevOpen.includes(department)
        ? prevOpen.filter((dept) => dept !== department)
        : [...prevOpen, department]
    );
  };

  return (
    <List component="nav">
      {departments.map((dept) => (
        <div key={dept.department}>
          <ListItem button>
            <ListItemIcon>
              <Checkbox
                checked={openDepartments.includes(dept.department)}
                onChange={() => handleToggle(dept.department)}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            {openDepartments.includes(dept.department) ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItem>
          <Collapse
            in={openDepartments.includes(dept.department)}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem key={subDept} button style={{ paddingLeft: "30px" }}>
                  <ListItemIcon>
                    <Checkbox color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default ExpandableDepartmentList;
