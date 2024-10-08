// Menu Mobile
const showPopupButton = document.getElementById('icon-menu-mobile');
const closePopupButton = document.getElementById('close-menu-mobile');
const popup = document.getElementById('menu-mobile');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  
  closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'inherit';
  });

  // Order Mobile
  const showOrderMobile = document.getElementById('selected-order');
  const ShowBtnCloseOrder = document.getElementById('close-details-order');
  const popupOrderMobile = document.getElementById('1');
  
   showOrderMobile.addEventListener('click', () => {

    if(window.screen.availWidth <=992) {
        popupOrderMobile.style.display = 'inherit';
        ShowBtnCloseOrder.style.display = 'inherit';
        document.body.style.overflow = 'hidden';
    }
 
  });

  ShowBtnCloseOrder.addEventListener('click', () => {
    if(window.screen.availWidth <=992) {
    popupOrderMobile.style.display = 'none';
    ShowBtnCloseOrder.style.display = 'none';
    document.body.style.overflow = 'none';
    }
  });
  