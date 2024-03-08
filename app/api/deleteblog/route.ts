import { connectToDb } from "@/app/lib/connectToDb";
import { Blog } from "@/app/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    connectToDb();
    try {
        const body = JSON.parse(await new Response(req.body).text());
        await Blog.findByIdAndDelete(body._id);
        return NextResponse.json({ message: "Blog Successfully Deleted" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "There was an Error" }, { status: 500 });
    }
}