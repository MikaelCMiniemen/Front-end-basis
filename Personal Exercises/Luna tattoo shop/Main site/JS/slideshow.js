 let slideIndex = 1;

      // Show first slide on load
      showSlides(slideIndex);

      function plusDivs(n) {
        showSlides((slideIndex += n));
      }

      function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
        }

        slides[slideIndex - 1].classList.add("active");
      }