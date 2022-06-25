import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt";
import { Link, useParams } from "react-router-dom";

interface IPROPS {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ availableAt, slug, type, title }: IPROPS) {
  const { slug: slugN } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'",
    {
      locale: ptBR,
    }
  );
  const isActiveLesson = slugN === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm font-medium  flex items center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={`text-sm font-medium  flex items center gap-2 ${
                isActiveLesson ? "text-white" : "text-orange-500"
              }`}
            >
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[2px] text-white border   font-bold ${
              isActiveLesson ? "border-white" : "border-green-300"
            }`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200 "
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
