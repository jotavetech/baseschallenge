interface QuestionProps {
  title: string;
  description: string;
}

const Question = ({ title, description }: QuestionProps) => {
  return (
    <li className="w-full">
      <p className="text-primary dark:text-primary-dark font-medium">{title}</p>
      <span className="text-secondary dark:text-secondary-dark text-sm md:text-base">
        {description}
      </span>
    </li>
  );
};

export default Question;
