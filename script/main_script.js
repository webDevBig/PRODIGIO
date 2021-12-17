  new Lightpick({
      field: document.getElementById('calendar'),
      format: 'MMMM DD, YYYY',
      firstDay: 7,
  });
  window.onload = function () {

      window.addEventListener('scroll', function (e) {

          let s = this.scrollY;
          let w = this.outerWidth;
          let h = document.getElementsByClassName('paralax')[0].clientWidth;
          let h_b = 300;


          let p_b = s / h_b;
          let z_1 = 1 + (w / 10000 * p_b);
          document.getElementsByClassName('parallax__layer--base')[0].style = `transform: scale(${z_1});`;

          document.getElementsByClassName('cloud_sec4')[0].style = `transform: scale(${z_1});`;
      })

  }

  $('.cloud_sec3').paroller();


  $("#confirm").click(function () {
      $('.form_input_block_code').css({
          display: "flex"
      })
      $('.form_input_block_phone').css({
          display: "none"
      })
      $(this).css({
          display: 'none'
      })
      $('#verification').css({
          display: "block"
      })
  })

  $("#verification").click(function () {
      $('.form_content_step2').css({
          display: "flex"
      })
      $('.form_content_step1').css({
          display: "none"
      })
  })
  $("#confirm_finish").click(function () {
      $('.form_content_step3').css({
          display: "flex"
      })
      $('.form_content_step2').css({
          display: "none"
      })
  })
