goog.provide('dj.ext.models.AccordionItemModel');

/**
 * @constructor
 * @param {string} id
 * @param {Element} parent
 * @param {Element} header
 * @param {Element} content
 */
dj.ext.models.AccordionItemModel = function(id, parent, header, content)
{
    /**
     * @type {string}
     */
    this.id = id;

    /**
     * @type {Element}
     */
    this.parent = parent;

    /**
     * @type {Element}
     */
    this.header = header;

    /**
     * @type {Element}
     */
    this.content = content;

    /**
     * @type {boolean}
     */
    this.active = false;
};