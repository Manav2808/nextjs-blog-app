import { connectToDb } from "@/app/lib/connectToDb";
import { Blog } from "@/app/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    connectToDb();
    try {
        const author = params.author;
        const blogs = await Blog.find({ author: author });
        if (!blogs) { return NextResponse.json({ message: "The Blog does not exist" }, { status: 404 }); }
        return NextResponse.json({ message: blogs }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "There was an Error" }, { status: 500 });
    }
}