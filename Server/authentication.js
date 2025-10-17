// src/auth.js
import { supabase } from "./supabaseClient";

// Sign up a new user
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

// Login
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

// Get current user
export const getUser = () => supabase.auth.getUser();
