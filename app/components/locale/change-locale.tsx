import { useRouter, usePathname } from "../../utils/navigation";

export function ChangeLocale({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: any) {
    router.push(pathname, { locale: e.target.value });
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-button-bg-2 text-primary dark:text-primary-dark font-medium px-2 rounded-xl lg:rounded-md lg:px-4 lg:py-3 hover:-translate-y-1"
    >
      <option value="en">EN</option>
      <option value="pt-br">PT-BR</option>
    </select>
  );
}
