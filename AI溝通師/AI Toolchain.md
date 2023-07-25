<style>
  .slide h2 {
    display: none;
  }

  .slide.visible h2 {
    display: block;
  }
</style>

# 你應該用AI創造自己的工具組和工作流

## Slide 0
因為只有你最知道你自己的需求
{: .slide #slide0}

## Slide 1
你應該用AI創造自己的工具組和工作流
![Image](./Image1-1.png)
{: .slide #slide1}

## Slide 2
比如這樣
![Image](./Image2-1.png)
![Image](./Image2-2.png)
{: .slide #slide2}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
$(document).ready(function() {
  var currentSlide = 0;
  var totalSlides = $('.slide').length;

  // Hide all slides except the first one
  $('.slide').hide();
  $('#slide' + currentSlide).addClass('visible').show();

  // Add the navigation buttons
  var prevSlideButton = '<button id="prevSlide" style="position: fixed; left: 10px; bottom: 10px; font-size: 2em;">Previous Slide</button>';
  var nextSlideButton = '<button id="nextSlide" style="position: fixed; right: 10px; bottom: 10px; font-size: 2em;">Next Slide</button>';
  $("body").append(prevSlideButton, nextSlideButton);

  // Initially disable the Previous Slide button
  $('#prevSlide').prop('disabled', true);

  // When the Next Slide button is clicked
  $('#nextSlide').click(function() {
    // Hide current slide
    $('#slide' + currentSlide).removeClass('visible').hide();

    // Increment currentSlide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show next slide
    $('#slide' + currentSlide).addClass('visible').show();

    // Enable the Previous Slide button
    $('#prevSlide').prop('disabled', false);

    // Disable the Next Slide button if this is the last slide
    if (currentSlide === totalSlides - 1) {
      $('#nextSlide').prop('disabled', true);
    }
  });

  // When the Previous Slide button is clicked
  $('#prevSlide').click(function() {
    // Hide current slide
    $('#slide' + currentSlide).removeClass('visible').hide();

    // Decrement currentSlide
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    // Show previous slide
    $('#slide' + currentSlide).addClass('visible').show();

    // Enable the Next Slide button
    $('#nextSlide').prop('disabled', false);

    // Disable the Previous Slide button if this is the first slide
    if (currentSlide === 0) {
      $('#prevSlide').prop('disabled', true);
    }
  });

  // Handle click on table of contents
  $('#toc a').click(function(event) {
    event.preventDefault();

    var targetSlide = $(this).attr('href').substring(1);
    var targetIndex = $('.slide').index($('#' + targetSlide));

    if (targetIndex >= 0) {
      // Hide current slide
      $('#slide' + currentSlide).removeClass('visible').hide();

      // Set current slide to target
      currentSlide = targetIndex;

      // Show target slide
      $('#slide' + currentSlide).addClass('visible').show();

      // Enable or disable navigation buttons
      $('#prevSlide').prop('disabled', currentSlide === 0);
      $('#nextSlide').prop('disabled', currentSlide === totalSlides - 1);
    }
  });
});
</script>
