import { MessageCircleQuestion } from "lucide-react";
import Question from "../../components/faq/question";
import { useTranslations } from "next-intl";

const FaqPage = () => {

  const translate = useTranslations("faq");
  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center flex-col">
      <h1 className="text-primary dark:text-primary-dark mt-5 md:mt-10 font-semibold flex items-center gap-2">
        {translate("title")} <MessageCircleQuestion />
      </h1>
      <ul className="px-10 mt-10 max-w-[600px] space-y-10">
        <Question
          title={`- ${translate("q1.title")}`}
          description={`${translate("q1.description")}`}
        />
        <Question
          title={`- ${translate("q2.title")}`}
          description={`${translate("q2.description")}`}
        />
        <Question
          title={`- ${translate("q3.title")}`}
          description={`${translate("q3.description")}`}
        />
        <Question
          title={`- ${translate("q4.title")}`}
          description={`${translate("q4.description")}`}
        />
        <Question
          title={`- ${translate("q5.title")}`}
          description={`${translate("q5.description")}`}
        />
        <Question
          title={`- ${translate("q6.title")}`}
          description={`${translate("q6.description")}`}
        />
        <Question
          title={`- ${translate("q7.title")}`}
          description={`${translate("q7.description")}`}
        />
      </ul>
    </div>
  );
};

export default FaqPage;
