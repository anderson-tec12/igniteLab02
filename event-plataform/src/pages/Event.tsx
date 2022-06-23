import { Header } from "../Components/Header";
import { Lesson } from "../Components/Lesson";
import { Sidebar } from "../Components/Sidebar";
import { Video } from "../Components/Video";

export function Event() {
  return (
    <>
      <Header />
      <Lesson />
      <Video />
      <Sidebar />
    </>
  );
}
