import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";

const attributes = {
    imageUrl: {
        type: "string",
        tag: ".hero",
        attribute: "style"
    },
    explainerText: {
        type: "string",
        tag: "p.explainerText"
    },
    linkText: {
        type: "string",
        source: "text",
        selector: "a"
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    }
};

registerBlockType("ws-blocks/hero-banner", {
    title: __("Hero Banner", "ws-blocks"),
    description: __(
        "Fullwidth page banner with logo and a call to action button",
        "ws-blocks"
    ),
    icon: "welcome-view-site",
    category: "ws-block-category",
    keywords: [__("windy", "shore", "ws-blocks")],
    attributes,
    supports: {
        reusable: false,
        html: false
    },
    edit: Edit,
    save: Save
});
