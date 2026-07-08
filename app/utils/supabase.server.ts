import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

export function getSupabaseServerClient(request: Request) {
  const headers = new Headers();

  const supabaseUrl =
    import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    // fallback to non-vite env keys currently present in your .env
    process.env.SUPABASE_URL!;

  const supabaseKey =
    import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    // fallback to non-vite env keys currently present in your .env
    process.env.SUPABASE_PUBLISHABLE_KEY!;



  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get("Cookie") ?? "") as any;
      },
      setAll(cookiesToSet: any[]) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append("Set-Cookie", serializeCookieHeader(name, value, options))
        );
      },
    },
  });

  return { supabase, headers };
}
