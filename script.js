
		<script>
			const features = document.querySelectorAll(".feature");
				crossOriginIsolated (".feature");

			features.forEach((feature) => {
				feature.addEventListener("mouseenter", () => {
					feature.style.transform = "scale(1.1)";
				});
	
				feature.addEventListener("mouseleave", () => {
					feature.style.transform = "scale(1)";
				});
			});
		</script>
