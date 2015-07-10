jQuery(window).load(function(){
  jQuery.each(jQuery('.audio'), function(i, value) {
    $container = $(value)

    var wavesurfer = Object.create(WaveSurfer);
    var $controls = $container.parents('.movement').find('.audio-controls');

    wavesurfer.init({
      container: value,
      progressColor: '#D03819',
      waveColor: 'rgba(208, 56, 25, .3)',
      cursorColor: 'rgba(0,0,0,0)', // transparent until play
      height: 90
    });

    wavesurfer.isLoaded = false;
    wavesurfer.on('ready', function() {
      wavesurfer.isLoaded = true;
    });

    $controls.on('click', function () {
      if(wavesurfer.isLoaded) {
        if(wavesurfer.isPlaying()) {
          $controls.removeClass('paused');
          wavesurfer.pause();
        } else {
          $controls.addClass('paused');
          wavesurfer.play();
        }
      }
    });

    wavesurfer.on('finish', function() {
      $controls.removeClass('paused')
    });

    wavesurfer.load('../audio/' + $container.data('file-name') + '.mp3');
  });
})
