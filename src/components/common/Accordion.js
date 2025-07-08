import { Disclosure } from '@headlessui/react';

export default function Accordion({ items }) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>{item.question}</span>
                <span className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}>
                  ▼
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {item.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}