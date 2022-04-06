import Engineer from "../lib/Engineer";

test("create engineer object", () => {
  const engineer = new Engineer("testName", 0, "test@email.ca", "testGit");
  expect(engineer.name).toBe("testName");
  expect(engineer.email).toBe("test@email.ca");
  expect(engineer.role).toBe("Engineer");
  expect(engineer.id).toEqual(0);
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toBe("testGit");
});

test("with methods created get engineer details", () => {
  const engineer = new engineer("testName", 0, "test@email.ca", "testGit");
  expect(engineer.getName()).toEqual(expect.stringContaining("testName"));
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getId()).toEqual(0);
  expect(engineer.getEmail()).toEqual(expect.stringContaining("test@email.ca"));
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.github).toBe("testGit");
});
