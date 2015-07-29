/**
	* Container class
	*/
export default class Container {
/**
	* @param {String} [id] - id of container dom node
	*/
constructor(id) {
  this.node = document.getElementById(id);
  this.update();
}

	/**
	 * [update width and height]
	 */
update() {
  this._width = this.node.width.baseVal.value;
  this._height = this.node.height.baseVal.value;
}
/**
	* @param  {Number} [w]
	*/
set width(w) {
  this._width = w;
}
/**
	* @return {Number}
	*/
get width() {
  return this._width;
}

/**
	* @param  {Number} [h]
	*/
set height(h) {
  this._height = h;
}

/**
	* @return {Number}
	*/
get height() {
  return this._height;
}

/**
	* @param  {Node} [item] - dom node to be appended
	*/
append(item) {
  this.node.appendChild(item);
}
};
