// src/rides.js
import { supabase } from "./supabaseClient";

// Create ride
export const createRide = async (rider_id, pickup, dropoff) => {
  const { data, error } = await supabase
    .from("rides")
    .insert([{ rider_id, pickup, dropoff, status: "requested" }]);
  return { data, error };
};

// Get all rides
export const getRides = async () => {
  const { data, error } = await supabase
    .from("rides")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
};

// Accept ride (driver)
export const acceptRide = async (ride_id, driver_id) => {
  const { data, error } = await supabase
    .from("rides")
    .update({ driver_id, status: "accepted" })
    .eq("id", ride_id);
  return { data, error };
};
