/**
 * Frontend layout helper.
 *
 * // TODO Make this disable-able.
 */

/**
 * Adds classes to proper containers to engage proper layout of the Slam.
 *
 * @param {element} contentBlock
 * @returns {void}
 */
function verticalSlamLayoutHelper(contentBlock) {
	if (!contentBlock) {
		return;
	}

	const blocks = contentBlock.querySelectorAll('.wp-block-rhd-vertical-slam');

	[...blocks].forEach((block) => {
		const side = block.classList.contains('is-style-stick-left')
			? 'left'
			: 'right';

		const parent = block.closest('.wp-block-group', '.wp-block-cover')
			? block.closest('.wp-block-group', '.wp-block-cover')
			: block.closest('.wp-block-post-content');

		parent.classList.add('has-vertical-slam', `has-vertical-slam__${side}`);
	});
}

(function () {
	var postContent = document.querySelector('.wp-block-post-content')
		? document.querySelector('.wp-block-post-content')
		: null;

	verticalSlamLayoutHelper(postContent);
})();
