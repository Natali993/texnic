import { Header } from '../app/Header';
import { Footer } from '../app/Footer';
import Script from 'next/script';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
     <Script
  id="anchor-scroll"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(){
        var offset = 162;
        function scrollToHash(hash){
          if(!hash) return;
          var id = hash.charAt(0)==='#' ? hash.slice(1) : hash;
          var attempts = 0;
          var maxAttempts = 30;

          function tryScroll(){
            var el = document.getElementById(id) || document.querySelector('[name="'+id+'"]');
            if(el){
              var rect = el.getBoundingClientRect();
              var y = rect.top + window.scrollY - offset;

              // Перевірка: чи елемент у документі і має висоту > 0
              if(rect.height > 0 || rect.width > 0){
                requestAnimationFrame(function(){
                  window.scrollTo({ top: y, behavior: 'smooth' });
                });
              } else if(attempts < maxAttempts){
                attempts++;
                setTimeout(tryScroll, 100);
              }
            } else if(attempts < maxAttempts){
              attempts++;
              setTimeout(tryScroll, 100);
            }
          }

          tryScroll();
        }

        // Слухаємо зміну хеша
        window.addEventListener('hashchange', function(){
          scrollToHash(window.location.hash);
        });

        // Обробка кліків по якорям
        document.addEventListener('click', function(e){
          var target = e.target && e.target.closest ? e.target.closest('a[href]') : null;
          if(!target) return;
          var href = target.getAttribute('href') || '';
          if(href.indexOf('#')===0){
            setTimeout(function(){ scrollToHash(href); }, 0);
          } else {
            try{
              var url = new URL(href, window.location.href);
              if(url.hash && url.pathname === window.location.pathname){
                setTimeout(function(){ scrollToHash(url.hash); }, 0);
              }
            } catch(err){}
          }
        });

        // initial on load (але трохи з затримкою, щоб React DOM встиг відрендеритись)
        setTimeout(function(){
          scrollToHash(window.location.hash);
        }, 300);
      })();
    `
  }}
/>
      <Header />
      <main className={`flex-1 bg-white pt-40 lg:pt-32 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
