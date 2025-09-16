const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000";

export const SIGN_IN_URL = `${AUTH_BASE_URL}/auth/sign-in`;