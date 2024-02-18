import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log("router.query:", router.query);

  function loadProjectHandler() {
    // router.push("/clients/s4474581/projecta");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "s4474581", clientProjectId: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Project Page for a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
