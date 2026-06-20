import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) return NextResponse.json(error);

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        name: body.name,
        price: body.price,
        category: body.category,
        description: body.description,
        store_id: 1,
      },
    ])
    .select();

  if (error) return NextResponse.json(error);

  return NextResponse.json(data);
}