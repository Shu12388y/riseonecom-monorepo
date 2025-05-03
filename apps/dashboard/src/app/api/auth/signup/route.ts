import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";



export const runtime ="nodejs"
export const POST = async (request: Request) => {
    try {
        const data  = await request.json();

        if (!data || !data.email || !data.password || !data.name) {
            return NextResponse.json({ message: "Invalid request data" }, { status: 400 });
        }

        const findUser = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (findUser) {
            return NextResponse.json({ message: "User already exists",data:findUser.id }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                businessName:data.businessName,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: "User created successfully", data: newUser.id }, { status: 201 });
        
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
