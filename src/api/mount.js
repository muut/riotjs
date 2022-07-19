import $ from 'bianco.query'
import {mountComponent} from '../core/mount-component'

/**
 * Mounting function that will work only for the components that were globally registered
 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
 * @param   {Object} initialProps - the initial component properties
 * @param   {string} name - optional component name
 * @param   {Array} slots - component slots
 * @returns {Array} list of riot components
 */
export function mount(selector, initialProps, name, slots) {
  return $(selector).map(element => mountComponent(element, initialProps, name, slots))
}
