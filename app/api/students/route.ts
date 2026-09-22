import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET() { const students = await prisma.user.findMany({ where: { role: 'STUDENT' }, include: { studentClasses: { include: { class: true } } }, orderBy: { lastName: 'asc' } }); return NextResponse.json(students) }
export async function POST(request: Request) { const body = await request.json(); const student = await prisma.user.create({ data: { ...body, role: 'STUDENT' } }); return NextResponse.json(student, { status: 201 }) }
