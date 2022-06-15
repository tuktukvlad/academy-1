
// Сюда необходимо перенести js секции


Shopify.theme.sections.register('alternate-main-product', {
    // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
    onLoad: function() {
      // Do something when a section instance is loaded
      // Здесь должна быть инициализация
    },

    // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
    onUnload: function() {
      // Do something when a section instance is unloaded
      // Здесь должен быть дестрой если он необходим
    },

    // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
    onSelect: function() {
      // Do something when a section instance is selected
    },

    // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
    onDeselect: function() {
      // Do something when a section instance is deselected
    },

    // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
    onBlockSelect: function(event) {
      // Do something when a section block is selected
    },

    // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
    onBlockDeselect: function(event) {
      // Do something when a section block is deselected
    }
});
