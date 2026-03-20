import { getUser } from "@/lib/data";

function isNextInternalError(error: unknown): boolean {
  if (
    error &&
    typeof error === "object" &&
    "digest" in error &&
    typeof (error as { digest: unknown }).digest === "string"
  ) {
    const digest = (error as { digest: string }).digest;
    return (
      digest.startsWith("NEXT_REDIRECT") ||
      digest.startsWith("NEXT_HTTP_ERROR_FALLBACK") ||
      digest.startsWith("NEXT_NOT_FOUND")
    );
  }
  return false;
}

export default async function UserProfileSafe() {
  try {
    const user = await getUser();

    return (
      <div className="rounded-lg border border-border p-6 space-y-1">
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-muted-foreground">{user.email}</p>
        <p className="text-xs text-muted-foreground">{user.role}</p>
      </div>
    );
  } catch (error) {
    if (isNextInternalError(error)) {
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
