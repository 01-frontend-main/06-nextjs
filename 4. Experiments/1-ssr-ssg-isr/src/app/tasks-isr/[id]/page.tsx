import { getDaysAgo } from "@/utils/getDaysAgo";

type Task = {
  id: string;
  name: string;
  expiredAt: string;
  assignee: string;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const drawData = await fetch("http://localhost:8000/tasks");
  const tasks = (await drawData.json()) as Task[];
  return tasks.map(({ id }) => ({
    id: String(id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const taskDetail = await fetch(`http://localhost:8000/tasks/${id}`).then(
    (res) => res.json()
  );

  return (
    <div>
      <h4>Tasks will be updated for every minute</h4>
      <p style={{ marginBottom: "8px" }}>
        <strong>{taskDetail.name}</strong>
      </p>
      <small>
        {taskDetail.assignee} - <i>Expired At</i>:{" "}
        {getDaysAgo(taskDetail.expiredAt)} days ago
      </small>
    </div>
  );
}
