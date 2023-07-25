# 你應該用AI創造自己的工具組和工作流

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="slide" id="slide0">
## Slide 0

因為只有你最知道你自己的需求

</div>

<div class="slide" id="slide1">
## Slide 1

你應該用AI創造自己的工具組和工作流
![](./Image1-1.png)

</div>

<div class="slide" id="slide2">

## Slide 2

比如這樣

![](./Image2-1.png)  

![](./Image2-2.png)
</div>


<script>
  $(document).ready(function() {
    var currentSlide = 0;
    var totalSlides = $('.slide').length;

    // Hide all slides except the first one
    $('.slide').hide();
    $('#slide' + currentSlide).show();

    // Add the Next Slide button
    var nextSlideButton = '<button id="nextSlide">Next Slide</button>';
    $("body").append(nextSlideButton);

    // When the Next Slide button is clicked
    $('#nextSlide').click(function() {
      // Hide current slide
      $('#slide' + currentSlide).hide();

      // Increment currentSlide
      currentSlide = (currentSlide + 1) % totalSlides;

      // Show next slide
      $('#slide' + currentSlide).show();
    });
  });
</script>
