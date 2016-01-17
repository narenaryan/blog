YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        contentBox: '#myCarousel',
        height: 250,
        width: "100%",
        intervalTime: 3
      }
    ).render();
  }
);