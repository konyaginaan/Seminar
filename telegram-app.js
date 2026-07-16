(function(){
  if (typeof window.Telegram === 'undefined' || !window.Telegram.WebApp) return;
  var tg = window.Telegram.WebApp;

  tg.ready();
  tg.expand();

  try { tg.setHeaderColor('#F2EFEC'); } catch(e) {}
  try { tg.setBackgroundColor('#F2EFEC'); } catch(e) {}
  try { tg.disableVerticalSwipes(); } catch(e) {}

  var isHome = /\/(index\.html)?$/.test(window.location.pathname);

  if (tg.BackButton) {
    if (isHome) {
      tg.BackButton.hide();
    } else {
      tg.BackButton.show();
      tg.BackButton.onClick(function(){
        window.location.href = 'index.html';
      });
    }
  }
})();
