import prisma from '@/db'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(
    req: Request
) {
    return NextResponse.json(await prisma.user.findMany())
}

export async function POST(req: Request) {
    const body = await req.json();

    await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: body.password,
        }
    })

    return NextResponse.json({ status: 300 })
}