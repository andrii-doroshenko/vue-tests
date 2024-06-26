const genderChoose = (gender) =>
  gender === "male"
    ? "https://avatar.iran.liara.run/public/boy"
    : "https://avatar.iran.liara.run/public/girl";

export const data = {
  users: [
    {
      id: 1,
      name: "Andrii Doroshenko",
      avatar: genderChoose("male"),
    },
    {
      id: 2,
      name: "Violet Gates",
      avatar: genderChoose("female"),
    },
    {
      id: 3,
      name: "Steve Jobs",
      avatar: genderChoose("male"),
    },
    {
      id: 4,
      name: "Yassine Smith",
      avatar: genderChoose("female"),
    },
    {
      id: 5,
      name: "Senior Saez",
      avatar: genderChoose("male"),
    },
  ],
  newUsers: [
    {
      id: 6,
      name: "User 1",
      avatar: genderChoose("male"),
    },
    {
      id: 7,
      name: "User 2",
      avatar: genderChoose("female"),
    },
    {
      id: 8,
      name: "User 3",
      avatar: genderChoose("male"),
    },
  ],
};
