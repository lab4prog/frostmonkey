import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("organizations").select('*');
    return {
      organizations: data,
    };
  }