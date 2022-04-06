import Intern from "../lib/Intern";

test("create intern object", () => {
  const intern = new intern("testName", 0, "test@email.ca", "testSchool");
  expect(intern.name).toBe("testName");
  expect(intern.email).toBe("test@email.ca");
  expect(intern.role).toBe("intern");
  expect(intern.id).toEqual(0);
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toBe("testSchool");
});

test("with methods created get intern details", () => {
  const intern = new intern("testName", 0, "test@email.ca", "testSchool");
  expect(intern.getName()).toEqual(expect.stringContaining("testName"));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getId()).toEqual(0);
  expect(intern.getEmail()).toEqual(expect.stringContaining("test@email.ca"));
  expect(intern.getRole()).toBe("intern");
  expect(intern.school).toBe("testSchool");
});
