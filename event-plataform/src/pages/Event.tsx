import { Header } from "../Components/Header";

import { Sidebar } from "../Components/Sidebar";
import { Video } from "../Components/Video";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
