const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//get employees data
app.get("/api/employees", (req, res) => {
  const employees = getDummyEmployees(5); //get 5 dummy employees
  if (employees.length > 0) {
    res.json(employees);
  } else {
    res.status(404).json({ error: "employees data not found" });
  }
});

// get employees login time
app.get("/api/employee/:employeeId/logins", (req, res) => {
  const employees = getDummyEmployees(5);
  const employeeId = parseInt(req.params.employeeId);
  const employee = employees.find((employee) => employee.id === employeeId);
  if (employee) {
    res.json(employee.logins);
  } else {
    res.status(404).json({ error: "employee not found" });
  }
});

//create employees data
function getDummyEmployees(employeeCount) {
  const employees = [];
  const response = ["Positive", "Negative"];
  const options = { day: "numeric", month: "long", year: "numeric" };
  const leave_type = ["Annual", "Sick"];

  for (let i = 0; i < employeeCount; i++) {
    const logins = getDummyLogins();

    const employee = {
      id: i + 1,
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      submission_date: faker.date
        .recent()
        .toLocaleDateString(undefined, options),
      response_type: response.at(faker.number.int({ min: 0, max: 1 })),
      flow_rating: `${faker.number.int({ min: 1, max: 10 })}/10`,
      view_submission: "View Submission",
      leave_type: leave_type.at(faker.number.int({ min: 0, max: 1 })),
      logins: logins,
    };
    employees.push(employee);
  }
  return employees;
}

//generate dummy login times with week days
function getDummyLogins() {
  const logins = [];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 0; i < days.length; i++) {
    const loginTime = faker.number.int({ min: 1, max: 12 });
    logins.push({ day: `${days[i]}`, time: loginTime });
  }
  return logins;
}

//start server
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
