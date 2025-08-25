'use client';

import { useEffect, useRef, useState } from 'react';

export default function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Any',
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  // کلیک بیرون / ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // وقتی باز میشه، هایلایت روی مقدار فعلی یا اولین آیتم
  useEffect(() => {
    if (open) {
      const idx =
        options.findIndex((o) => o.value === value) ?? -1;
      setHighlight(idx >= 0 ? idx : 0);
      // فوکوس روی لیست برای ناوبری با کیبورد
      setTimeout(() => listRef.current?.focus(), 0);
    }
  }, [open]);

  const current = options.find((o) => o.value === value);
  const display = current ? current.label : placeholder;

  const selectAt = (idx) => {
    const opt = options[idx];
    if (!opt) return;
    onChange(opt.value);
    setOpen(false);
    // بازگشت فوکوس به دکمه
    buttonRef.current?.focus();
  };

  const onButtonKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setHighlight(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setHighlight(options.length - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectAt(highlight);
    } else if (e.key === 'Tab') {
      // بستن هنگام تب
      setOpen(false);
    }
  };

  const menuId = `menu-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div ref={rootRef} className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onKeyDown={onButtonKeyDown}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-gray-800 shadow-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
      >
        <span className={`truncate ${current ? '' : 'text-gray-500'}`}>
          {display}
        </span>
        <svg
          className={`h-5 w-5 transition-transform group-hover:opacity-100 ${
            open ? 'rotate-180 opacity-100' : 'opacity-70'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="listbox"
          tabIndex={-1}
          ref={listRef}
          onKeyDown={onListKeyDown}
          className="absolute z-50 mt-2 max-h-60 w-[var(--w,theme(width.full))] overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg focus:outline-none"
          style={{ '--w': '100%' }}
        >
          {options.map((opt, idx) => {
            const selected = value === opt.value;
            const active = idx === highlight;
            return (
              <li
                key={opt.value || idx}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setHighlight(idx)}
                onMouseDown={(e) => e.preventDefault()} // از دست نرفتن فوکوس
                onClick={() => selectAt(idx)}
                className={`flex cursor-pointer items-center justify-between rounded px-2.5 py-2 text-sm ${
                  active
                    ? 'bg-green-50 text-green-800'
                    : 'text-gray-800 hover:bg-gray-50'
                } ${selected ? 'font-semibold' : ''}`}
              >
                <span className="truncate">{opt.label}</span>
                {selected && (
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.414l-7.01 7.01a1 1 0 01-1.414 0l-3.01-3.01a1 1 0 111.414-1.415l2.303 2.304 6.303-6.303a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
