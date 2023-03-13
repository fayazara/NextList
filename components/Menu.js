import * as Tabs from "@radix-ui/react-tabs";

export default function Menu(props) {
  const tabs = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Code",
      value: "code",
    },
    {
      title: "No Code",
      value: "nocode",
    },
    {
      title: "Dark",
      value: "dark",
    },
    {
      title: "Light",
      value: "light",
    },
    {
      title: "Minimal",
      value: "minimal",
    },
    {
      title: "Fancy",
      value: "fancy",
    },
  ];

  function handleSearch(e) {
    const { value } = e.target;
    props.onSearch(value);
  }

  return (
    <section className="mx-auto max-w-sm">
      <div className="relative mt-2 rounded-md shadow-input">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          name="search"
          id="search"
          onChange={handleSearch}
          className="block w-full rounded-md bg-white dark:bg-black border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Projects"
        />
      </div>
      <Tabs.Root
        defaultValue="tab1"
        onValueChange={(a) => {
          props.onTabChange(a);
        }}
      >
        <Tabs.List
          className="flex items-center overflow-x-auto whitespace-nowrap w-full p-1"
          aria-label="Filter by category"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              className="px-3 py-2 text-sm sm:text-base font-medium text-gray-500 transition rounded-md focus:outline-none hover:text-gray-800 hover:bg-slate-50 focus:bg-slate-50 hover:shadow-sm focus:shadow-sm data-[state=active]:bg-white data-[state=active]:shadow-md tab-shadow"
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </section>
  );
}
