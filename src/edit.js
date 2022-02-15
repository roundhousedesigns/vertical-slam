/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Retrieves the Text input.
 */
import { TextControl } from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, isSelected, children }) {
	const { text } = attributes;

	return (
		<div {...useBlockProps()}>
			<span className="vertical-slam-text">
				<TextControl
					label={__("Vertical Slam", "rhd")}
					value={text}
					onChange={(value) => setAttributes({ text: value })}
				/>
			</span>
			{isSelected ?
				<p className="instructions">
					This banner will stick vertically to the top-right of the page if placed at top-level, or else to its parent Group or Cover.
				</p>
				: null}
		</div>
	);
}
