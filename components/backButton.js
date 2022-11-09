import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackBtn = ({ href }) => (
  <Link
    href={href}
    className="bg-brand dark:bg-brand-dark shadow hover:shadow-none hover:text-cta transition-all p-1 rounded-sm block"
  >
    <ChevronLeftIcon className='w-6' />
  </Link>
)

export default BackBtn
