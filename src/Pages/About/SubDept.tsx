import ExpandableDepartmentList from "./ExpandableDepartmentList ";

const departments= [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const SubDept: React.FC = () => {


  return (
    <div>
      <h1>Department List</h1>
      <ExpandableDepartmentList departments={departments} />
    </div>
  );
};

export default SubDept;
