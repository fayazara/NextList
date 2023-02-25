import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
export default function Header() {
  return (
    <header className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">NextList</span>
            <svg
              className="h-7 w-auto text-slate-900 dark:text-white"
              viewBox="0 0 138 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132.525 47.6181L74.5499 2.13873C71.6449 -0.14032 66.8911 -0.14032 63.9861 2.13873L6.01123 47.6181C3.1062 49.897 0.729248 54.7828 0.729248 58.475V140.279C0.729248 143.971 3.75037 146.992 7.44275 146.992H131.093C134.786 146.992 137.807 143.971 137.807 140.279V58.475C137.807 54.7828 135.43 49.897 132.525 47.6181ZM50.9285 129.891C41.5753 130.633 30.4534 129.422 19.8969 127.873C18.348 117.317 17.1373 106.195 17.8799 96.8419C20.6829 61.5302 55.5917 72.7763 49.4147 98.3537C74.9921 92.1768 86.2401 127.088 50.9285 129.891Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-1 justify-end space-x-2 items-center">
          <ThemeSwitch />
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white rounded-lg px-6 py-2 -mx-6 -my-2 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Submit <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
