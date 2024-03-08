import { connectToDb } from "@/app/lib/connectToDb";
import { Blog } from "@/app/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    connectToDb();

    try {
        const body = JSON.parse(await new Response(req.body).text());
        const blog = new Blog(body);
        console.log(blog)
        await blog.save();
        return NextResponse.json({ message: blog }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "There was an Error" }, { status: 500 });
    }
}