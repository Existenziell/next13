import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackBtn = ({ href }) => (
  <Link
    href={href}
    className="bg-slate-300 dark:bg-slate-900 shadow hover:shadow-none transition-all p-1 rounded-sm block"
  >
    <ChevronLeftIcon className='w-6' />
  </Link>
)

export default BackBtn
