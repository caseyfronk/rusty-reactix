import { QueryHelper } from "@/components/misc/QueryHelper";
import Page from "@/components/Page";

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <QueryHelper url="/health" />
      <QueryHelper url="/projects" />
    </Page>
  );
}
