<script lang="ts">
import Imageslider from '$lib/assets/alliMobile.webp'  
import ImageSlider2 from '$lib/assets/alligator.webp'
import ImageSlider3 from '$lib/assets/bg-blue.jpg'	
import Cards from '$lib/Components/Cards.svelte'
const slideCarousel=[Imageslider,ImageSlider2,ImageSlider3];
</script>

<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	{#each slideCarousel as img}
		<Cards pictureCards={img}/>
	{/each}
</div>

