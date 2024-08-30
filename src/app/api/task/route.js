import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { connectDB } from "@/helper/db";

await connectDB();

// Get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error getting tasks:", error);
    return NextResponse.json(
      { message: "Error getting tasks", error: error.message },
      { status: 500 }
    );
  }
}

// Create a new task
export async function POST(request) {
  try {
    const { title, content, userId, status } = await request.json();

    const task = new Task({
      title,
      content,
      userId,
      status,
    });
    console.log("task: ", task);

    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.error("Error during creating task:", error);
    return NextResponse.json(
      { message: "Failed to create task", error: error.message },
      { status: 500 }
    );
  }
}
