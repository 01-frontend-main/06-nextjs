import { getDaysAgo } from "@/utils/getDaysAgo";

export const revalidate = 60; // every 1 minute

type Task = {
  id: string;
  name: string;
  expiredAt: string;
  assignee: string;
};

export default async function Page() {
  const drawData = await fetch("http://localhost:8000/tasks");
  const tasks = (await drawData.json()) as Task[];

  return (
    <div>
      <h4>Tasks will be updated for every minute</h4>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p style={{ marginBottom: "8px" }}>
              <strong>{task.name}</strong>
            </p>
            <small>
              {task.assignee} - <i>Expired At</i>: {getDaysAgo(task.expiredAt)}{" "}
              days ago
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
