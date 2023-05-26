(function ($) {

  // :: SHOW AND HIDE (ELEMENTS) DEPEND ON THEME
  function hideElementsForTheme() {
    if ($('.light-theme')[0]) { $('.for-dark-theme').hide(); }
    if ($('.dark-theme')[0]) { $('.for-light-theme').hide(); }
  }
  hideElementsForTheme();
  // --------------------------------------------------------------

  // :: CLOSE NOTICE BAR
  $('#close-notices-bar-btn').on('click', function () { $('#notices-bar').slideUp(); });
  // --------------------------------------------------------------

  // :: LANGUAGES MENU
  $('#lang .current').on('click', function () { $(this).parent().toggleClass('open'); });

  // :: HIDE WHEN CLICK OUTSIDE
  $(document).mouseup(function (e) {
    const langMenu = $("#lang");
    if (!langMenu.is(e.target) && langMenu.has(e.target).length === 0) { langMenu.removeClass('open'); }
  });
  // --------------------------------------------------------------

  // :: OPEN AND CLOSE NAVBAR LINKS
  $('#open-links-btn').on('click', function () { $('#theme-navbar-links').addClass('open-links'); });
  $('#close-links-btn').on('click', function () { $('#theme-navbar-links').removeClass('open-links'); });
  // --------------------------------------------------------------

  // :: F-NAV
  $('#theme-navbar .f-nav .f-nav-tab').on('click', function(e) {
    const filter = $(this).data('filter');
    $('#theme-navbar .mega-menu .f-area.'+filter).siblings().hide();
    $('#theme-navbar .mega-menu .f-area.'+filter).show();
  });
  // --------------------------------------------------------------

  // :: OPEN AND CLOSE SIDE-BOX
  $('#side-box-btn').on('click', function() { $('#side-box').addClass('open-side-box'); });
  $('#close-side-box-btn').on('click', function() { $('#side-box').removeClass('open-side-box'); });
  // --------------------------------------------------------------

  // :: NAVBAR INDICATOR
  const sb_link = $("#theme-navbar .side-box .f-nav .f-nav-tab");
  const sb_ind = $("#theme-navbar .side-box .f-nav .indicator");
  const sb_linkWidth = $("#theme-navbar .side-box .f-nav .f-nav-tab:nth-child(1)").width();
  sb_ind.css('width', sb_linkWidth);

  function handleIndicator(ele) {
    sb_ind.css('width', ele.offsetWidth + 'px');
    sb_ind.css('left', ele.offsetLeft + 'px');
  }

  sb_link.each(function (item, index) {
    $(this).on("click", function (e) {
      handleIndicator(e.target);
      $(this).addClass('active').siblings().removeClass('active');
    });
  });
  // --------------------------------------------------------------

  // :: CHECK IF CLASS (open-side-box) EXIST
  $("#theme-navbar .nav-bottom .links .link:not(#side-box-btn)").on('click', function() {
    if ($('.open-side-box')[0]) { $('#side-box').removeClass('open-side-box'); }
  });
  // --------------------------------------------------------------

  // :: HIDE (#side-box) WHEN CLICK OUTSIDE
  $(document).mouseup(function (e) {
    const sideBox = $("#side-box");
    if (!sideBox.is(e.target) && sideBox.has(e.target).length === 0) { sideBox.removeClass('open-side-box'); }
  });
  // --------------------------------------------------------------

  // :: DROPDOWN-MENU
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function (e) { e.preventDefault(); });
  // --------------------------------------------------------------

  // :: SHOW AND HIDE DROPDOWN-MENU
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function () {
    $(this).parent().siblings().removeClass('open-dropdown-menu');
    $(this).parent().toggleClass('open-dropdown-menu');
  });
  // --------------------------------------------------------------

  // :: HIDE DROPDOWN-MENU WHEN CLICK OUTSIDE
  $(document).mouseup(function (e) {
    const dropdownMenu = $("#theme-navbar .link.has-dropdown-menu");
    if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) { dropdownMenu.removeClass('open-dropdown-menu'); }
  });
  // --------------------------------------------------------------

  // :: OPEN USER-DROPDOWN-MENU
  $('#user-menu-btn > img').on('click', function () { $('#user-menu-btn').toggleClass('open') });
  // --------------------------------------------------------------


  // --------------------------------------------------------------

}(jQuery));