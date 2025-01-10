export function handleScrollEffect() {
  const header = document.querySelector('.header-animate');
  
  if (!header) {
    console.warn('Header element not found!');
    return;
  }

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll);


  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}