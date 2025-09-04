"use client";
import { useEffect } from 'react';

export default function AnchorScroll({ offset = 154 }: { offset?: number }) {
  useEffect(() => {
    let mounted = true;

    const scrollToHash = (hash: string) => {
      if (!hash) return;
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      let attempts = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        if (!mounted) return;
        const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      tryScroll();
    };

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);

    // initial load
    scrollToHash(window.location.hash);

    // catch clicks on anchor links and adjust after navigation
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest && (e.target as HTMLElement).closest('a[href]');
      if (!target) return;
      const href = (target as HTMLAnchorElement).getAttribute('href') || '';
      if (href.startsWith('#')) {
        // same-page anchor
        setTimeout(() => scrollToHash(href), 0);
      } else {
        try {
          const url = new URL(href, window.location.href);
          if (url.hash && url.pathname === window.location.pathname) {
            setTimeout(() => scrollToHash(url.hash), 0);
          }
        } catch (err) {
          // ignore invalid URL
        }
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      mounted = false;
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onClick);
    };
  }, [offset]);

  return null;
}
