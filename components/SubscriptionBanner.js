export default function SubscriptionBanner() {
  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex items sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 backdrop-blur py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
          <div className="block sm:flex items-center space-x-0 sm:space-x-4 text-sm leading-6 text-white">
            <p className="mb-2 sm:mb-0">
              Get new projects&nbsp;delivered&nbsp;to your inbox every week.
            </p>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 bg-gray-800 py-1.5 text-gray-900 shadow-input placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button type="button" className="-m-1.5 flex-none p-1.5">
            <span className="sr-only">Dismiss</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
