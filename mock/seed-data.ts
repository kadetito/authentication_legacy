import bcrypt from "bcryptjs";

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "client";
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Rafa Peña",
      email: "rafa@rafapenya.com",
      password: bcrypt.hashSync("123456"),
      role: "admin",
    },
    {
      name: "Eduardo Rios",
      email: "eduardo@google.com",
      password: bcrypt.hashSync("123456"),
      role: "client",
    },
  ],
};
