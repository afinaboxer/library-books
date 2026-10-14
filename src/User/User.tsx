import type { User } from "../types/user";

interface UserProps {
  user: User;
}

export function User({ user }: UserProps) {
  return (
    <article>
      <img src="#" alt="#" />
      {user.isAdmin ? "Здравствуйте" : "Салам алекум, брат"}
      <h3>{user.name}</h3>
      <p>{user.age}</p>
    </article>
  );
}
