import { useRouter, usePathname } from '../../utils/navigation';

export function ChangeLocale({ locale }: { locale: string }) {
    const router = useRouter();
    const pathname = usePathname();

    function handleChange(e: any) {
        router.push(pathname, { locale: e.target.value });
      };


      return (
        <select value={locale} onChange={handleChange} className='bg-button-bg-2 rounded-md dark:text-white text-black'>
          <option value="en">EN</option>
          <option value="pt-br">PT-BR</option>
        </select>
      )

}