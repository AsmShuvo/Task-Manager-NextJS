import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// Get a single task
export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    await connectDB();
    const task = await Task.find({ userId: taskId });
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error during getting task" }, { status: 404 });
  }
}

// Update a task
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;
    const { title, content, status } = await request.json();

    let task = await Task.findById(taskId);

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error in updating task !!" }, { status: 500 });
  }
}

// Delete a task
export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;
    await Task.deleteOne({ _id: taskId });
    return NextResponse.json({ message: "Task Deleted !!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error in deleting Task !" }, { status: 500 });
  }
}
