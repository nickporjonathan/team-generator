import Employee from "../lib/Employee";

test("creates object", () => {
  const employee = new Employee("testName", 0, "test@email.ca");
  expect(employee.name).toBe("testName");
  expect(employee.email).toBe("test@email.ca");
  expect(employee.role).toBe("Employee");
  expect(employee.id).toEqual(0);
  expect(employee.id).toEqual(expect.any(Number));
});

test("with methods created get employee details", () => {
  const employee = new Employee("testName", 0, "test@email.ca");
  expect(employee.getName()).toEqual(expect.stringContaining("testName"));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getId()).toEqual(0);
  expect(employee.getEmail()).toEqual(expect.stringContaining("test@email.ca"));
  expect(employee.getRole()).toBe("Employee");
});
