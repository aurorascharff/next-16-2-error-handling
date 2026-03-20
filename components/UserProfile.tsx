import { getUser } from "@/lib/data";

export default async function UserProfile() {
  const user = await getUser();

  return (
    <div className="rounded-lg border border-border p-6 space-y-1">
      <p className="font-semibold">{user.name}</p>
      <p className="text-sm text-muted-foreground">{user.email}</p>
      <p className="text-xs text-muted-foreground">{user.role}</p>
    </div>
  );
}
