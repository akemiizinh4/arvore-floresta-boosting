// Marca no índice a seção que está na tela.
// A página funciona normalmente sem este script.
(function () {
  const links = document.querySelectorAll(".indice a[href^='#']");
  if (!("IntersectionObserver" in window) || links.length === 0) return;

  // começa marcando a primeira seção
  links[0].setAttribute("aria-current", "true");

  const porId = {};
  links.forEach((a) => { porId[a.getAttribute("href").slice(1)] = a; });

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const link = porId[e.target.id];
      if (link) link.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  Object.keys(porId).forEach((id) => {
    const secao = document.getElementById(id);
    if (secao) observador.observe(secao);
  });
})();
