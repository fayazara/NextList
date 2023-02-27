import React from "react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
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
      <div>
        <div className="sm:ml-auto sm:max-w-sm max-w-none">
          <div className="border-b border-gray-300 focus-within:border-indigo-600">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleSearch}
              className="block w-full border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
