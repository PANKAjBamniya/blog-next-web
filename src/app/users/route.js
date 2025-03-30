export const users = [
  {
    id: 1,
    name: "pankaj",
  },
  {
    id: 2,
    name: "karan",
  },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name,
  };

  users.push(newUser);

  return Response.json(newUser, { status: 201 });
}
