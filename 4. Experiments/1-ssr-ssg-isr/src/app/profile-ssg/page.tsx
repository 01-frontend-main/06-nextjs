type Profile = {
  username: string;
  fullname: string;
  job: string;
  age: number;
  isActive: boolean;
};

export default async function Page() {
  const drawData = await fetch("http://localhost:8000/profile", {
    cache: "force-cache", // This will cache the result during the build step for SSG
  });
  const profile = (await drawData.json()) as Profile;

  return (
    <div>
      <h4>Profile</h4>
      <p>
        <strong>Username - </strong>
        {profile.username}
      </p>
      <p>
        <strong>Full Name - </strong>
        {profile.fullname}
      </p>
      <p>
        <strong>Job - </strong>
        {profile.job}
      </p>
      <p>
        <strong>Age - </strong>
        {profile.age}
      </p>
    </div>
  );
}
