import { RichText, getColorClassName } from "@wordpress/block-editor";
import classnames from "classnames";
const Save = ({ attributes }) => {
    const {
        content,
        alignment,
        backgroundColor,
        textColor,
        customBackgroundColor,
        customTextColor
    } = attributes;

    console.log("attributes: ", attributes);

    const backgroundClass = getColorClassName(
        "background-color",
        backgroundColor
    );
    const textClass = getColorClassName("text-color", textColor);

    console.log("backgroundClass: ", backgroundClass);
    console.log("textClass: ", textClass);

    return (
        <RichText.Content
            tagName="p"
            value={content}
            style={{
                textAlign: alignment,
                backgroundColor: backgroundColor,
                color: textColor
            }}
        />
    );
};

export default Save;
