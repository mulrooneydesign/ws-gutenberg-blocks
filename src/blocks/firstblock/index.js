var registerBlockType = wp.blocks.registerBlockType

var __ = wp.i18n.__
//wp.element is Wordpress version of React
//wp.element.createElement us basically React.createElement
var el = wp.element.createElement

registerBlockType("ws-blocks/firstblock", {
  title: __("First Block", "ws-blocks"),
  description: __("Our First Block", "ws-blocks"),
  category: "text",
  icon: "welcome-widgets-menus",
  keywords: [__("windy shore"), __("ws")],
  edit: function () {
    return el("p", null, "Editor")
  },
  save: function () {
    return el("p", null, "Save")
  },
})
