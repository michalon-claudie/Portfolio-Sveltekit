<script lang='ts'>
	let currentIndex = 0;
	let transitioning = false;
	import Imageslider from '$lib/assets/alliMobile.webp'  
	import ImageSlider2 from '$lib/assets/alligator.webp'
	import ImageSlider3 from '$lib/assets/bg-blue.jpg'
	const images = [Imageslider, ImageSlider2, ImageSlider3];
	import Cards from '$lib/Components/Cards.svelte'
  
	function nextSlide() {
	  if (!transitioning) {
		transitioning = true;
		currentIndex = (currentIndex + 1) % images.length;
		setTimeout(() => transitioning = false, 500); 
	  }
	}
  
	function prevSlide() {
	  if (!transitioning) {
		transitioning = true;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		setTimeout(() => transitioning = false, 500); 
	  }
	}
  </script>

  <div class="relative w-full overflow-hidden flex h-56">
	<div class="flex transition-transform duration-500" style="transform: translateX(-{currentIndex * 100}%);">
	  {#each images as img}
		<div class="w-full flex-shrink-0">
		  <Cards pictureCards={img}/>
		</div>
	  {/each}
	</div>
	<button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" on:click={prevSlide}>
	  &#10094;
	</button>
	<button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" on:click={nextSlide}>
	  &#10095;
	</button>
  </div>
  

