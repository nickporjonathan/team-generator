import Manager from "../lib/Manager";

test("creates object", () => {
  const manager = new Manager("testName", 0, "test@email.ca", 01);
  expect(manager.name).toBe("testName");
  expect(manager.email).toBe("test@email.ca");
  expect(manager.role).toBe("Manager");
  expect(manager.id).toEqual(0);
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(01);
});

test("with methods created get manager details", () => {
  const manager = new manager("testName", 0, "test@email.ca", 01);
  expect(manager.getName()).toEqual(expect.stringContaining("testName"));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getId()).toEqual(0);
  expect(manager.getEmail()).toEqual(expect.stringContaining("test@email.ca"));
  expect(manager.getRole()).toBe("manager");
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(01);
});
