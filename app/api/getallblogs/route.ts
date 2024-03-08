import { connectToDb } from "@/app/lib/connectToDb";
import { Blog } from "@/app/lib/models";
import { NextResponse } from "next/server";

export async function GET() {
    connectToDb();
    try {
        const blogs = await Blog.find({});
        return NextResponse.json({ blogs: blogs }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "There was an Error" }, { status: 500 });
    }
}