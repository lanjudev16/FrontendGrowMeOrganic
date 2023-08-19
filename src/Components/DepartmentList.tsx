import React, { useState } from 'react';
import { List, ListItem, ListItemButton, Collapse, ListItemText, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore, Folder, FolderOpen } from '@mui/icons-material';

interface Department {
  id: number;
  name: string;
  subDepartments?: Department[];
}

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(openId => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const renderDepartment = (department: Department) => {
    const isSubDepartmentsOpen = openIds.includes(department.id);

    return (
      <React.Fragment key={department.id}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleToggle(department.id)}>
            <ListItemIcon>
              {isSubDepartmentsOpen ? <FolderOpen /> : <Folder />}
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {isSubDepartmentsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        {department.subDepartments && (
          <Collapse in={isSubDepartmentsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map(subDepartment => (
                <ListItem key={subDepartment.id} sx={{ pl: 4 }}>
                  <ListItemText primary={subDepartment.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <List component="nav">
      {departments.map(department => renderDepartment(department))}
    </List>
  );
};

const AppDep: React.FC = () => {
  const departments: Department[] = [
    {
      id: 1,
      name: 'Department 1',
      subDepartments: [
        { id: 2, name: 'Sub Department 1' },
        { id: 3, name: 'Sub Department 2' },
      ],
    },
    {
      id: 4,
      name: 'Department 2',
      subDepartments: [
        { id: 5, name: 'Sub Department 3' },
      ],
    },
  ];

  return (
    <div>
      <h1>Department List</h1>
      <DepartmentList departments={departments} />
    </div>
  );
};

export default AppDep;
