<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<!-- Start: Error Status Code -->
		<h1>
			{$page.status}
		</h1>
		<!-- End: Error Status Code -->
		<p>
			{$page.error.message}
		</p>
	</div>
</div>
