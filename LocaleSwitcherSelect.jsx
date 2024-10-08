"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function handleLangChange(lang) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-1 uppercase rounded-md py-2 font-medium !important  mix-blend-difference"
      >
        {label}
        <MdOutlineArrowDropDown />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 rounded shadow-lg">
          <ul className="py-1">
            {React.Children.map(children, (child) => {
              if (child.props.value === defaultValue) {
                return;
              }
              return (
                <li
                  key={child.key}
                  className="cursor-pointer py-2 hover:bg-gray-100 uppercase md:bg-darkSeaBlue p-2"
                  onClick={() => handleLangChange(child.key)}
                >
                  {child.props.children}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}