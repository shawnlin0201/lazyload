/**
 * Lazyload.js
 * Version: 1.0
 * Contach: shawnlin0201@gmail.com
 * License: MIT License.
 */

// Lazyload.js will loaded until DOM content loaded.
document.addEventListener('DOMContentLoaded', function () {
	let target = document.querySelectorAll("img.lazy")

	if ("IntersectionObserver" in window) {
		// support has IntersectionObserver API broswer.

		// IntersectionObserver Setting
		const options = {
			root: null,
			rootMargin: '0px 0px 0px 0px'
		}

		let lazyImageObserver = new IntersectionObserver(function (entries, options) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let image = entry.target;

					image.src = image.dataset.src;

					image.classList.add("is-loaded");
					lazyImageObserver.unobserve(image);
				}
			});
		});

		target.forEach(function (image) {
			lazyImageObserver.observe(image);
		});

	} else {
		// support IE.
		target.forEach(function (image, index) {
			image.src = lazyImage.dataset.src;
			image.classList.add("is-loaded");
		});
	}
})
