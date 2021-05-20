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
        type: "html",
        tag: "p.explainerText"
    },
    subText: {
        type: "html",
        source: "text",
        selector: "p"
    }
};

registerBlockType("ws-blocks/text-banner", {
    title: __("Text Banner", "ws-blocks"),
    description: __(
        "Fullwidth page text banner with background image",
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
