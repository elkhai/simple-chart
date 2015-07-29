var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Chart = factory();
})(this, function () {
	'use strict';

	/**
 	* Container class
 	*/

	var Container = (function () {
		/**
  	* @param {String} [id] - id of container dom node
  	*/

		function Container(id) {
			_classCallCheck(this, Container);

			this.node = document.getElementById(id);
			this.update();
		}

		/**
   * [update width and height]
   */

		_createClass(Container, [{
			key: 'update',
			value: function update() {
				this._width = this.node.width.baseVal.value;
				this._height = this.node.height.baseVal.value;
			}

			/**
   	* @param  {Number} [w]
   	*/
		}, {
			key: 'append',

			/**
   	* @param  {Node} [item] - dom node to be appended
   	*/
			value: function append(item) {
				this.node.appendChild(item);
			}
		}, {
			key: 'width',
			set: function set(w) {
				this._width = w;
			},

			/**
   	* @return {Number}
   	*/
			get: function get() {
				return this._width;
			}

			/**
   	* @param  {Number} [h]
   	*/
		}, {
			key: 'height',
			set: function set(h) {
				this._height = h;
			},

			/**
   	* @return {Number}
   	*/
			get: function get() {
				return this._height;
			}
		}]);

		return Container;
	})();

	;

	/**
  * abstract class for creation SVG nodes
  */

	var SVGNode =
	/**
  * @param  {Object} [config]
  * @return {Node}
  */
	function SVGNode(config) {
		_classCallCheck(this, SVGNode);

		if (config) {
			var node = document.createElementNS('http://www.w3.org/2000/svg', config.type);
			var attrs = config.attrs;
			for (var key in attrs) {
				if (attrs.hasOwnProperty(key)) {
					if (key === 'textContent') {
						node.textContent = attrs[key];
					} else {
						node.setAttributeNS(null, key, attrs[key]);
					}
				}
			}
			return node;
		} else {
			console.log('you do not create config for your node!');
		}
	};

	var Label = (function (_SVGNode) {
		_inherits(Label, _SVGNode);

		/**
   * @param {Object} [data]
   * @param {Object} [config]
   * @returns {Node}
   */

		function Label(data, config) {
			_classCallCheck(this, Label);

			var svgConfig = undefined;
			svgConfig = {
				type: 'text',
				attrs: {
					x: data.x,
					y: data.y,
					'font-family': config.fontfamily,
					'font-size': config.fontsize,
					stroke: config.color,
					fill: config.color,
					textContent: '$ ' + data.text
				}
			};
			return _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, svgConfig);
		}

		return Label;
	})(SVGNode);

	var Trandline = (function (_SVGNode2) {
		_inherits(Trandline, _SVGNode2);

		/**
   * @param  {Object} [data] - prepared data
   * @param  {Object} [config]
   * @return {Node}
   */

		function Trandline(data, config) {
			_classCallCheck(this, Trandline);

			var svgConfig = {
				type: 'polyline',
				attrs: {
					id: 'trandline_' + data.id,
					fill: 'none',
					stroke: config.color,
					'stroke-width': config.width,
					points: data.points
				}
			};
			return _get(Object.getPrototypeOf(Trandline.prototype), 'constructor', this).call(this, svgConfig);
		}

		return Trandline;
	})(SVGNode);

	var PriceLine = (function (_SVGNode3) {
		_inherits(PriceLine, _SVGNode3);

		/**
   * @param {Object} [data]
   * @param {Object} [config]
   * @returns {Node}
   */

		function PriceLine(data, config) {
			_classCallCheck(this, PriceLine);

			var svgConfig = {
				type: 'line',
				attrs: {
					x1: data.x1,
					y1: data.y1,
					x2: data.x2,
					y2: data.y2,
					stroke: config.color,
					'stroke-width': config.width
				}
			};
			return _get(Object.getPrototypeOf(PriceLine.prototype), 'constructor', this).call(this, svgConfig);
		}

		return PriceLine;
	})(SVGNode);

	var Chart = (function () {
		/**
   * @param  {String} [containerId]
   * @param  {Object} [data] - data for chart creation
   * @param  {Object} [config] - optional
   */

		function Chart(containerId, data, config) {
			_classCallCheck(this, Chart);

			if (!config) {
				config = this.initConfig();
			}
			if (!data) {
				data = this.initData();
			}
			var container = new Container(containerId);
			var tempData = this.prepareData(data);
			this.createLabels(tempData, config.label, container);
			this.createPriceLines(config, container);
			this.createTrandline(data, tempData, config, container);
		}

		/**
   * initialize config, if input is empty
   */

		_createClass(Chart, [{
			key: 'initConfig',
			value: function initConfig() {
				return {
					trandline: {
						/**
       * [color for trandline]
       * @type {String}
       */
						color: '#979797',
						/**
       * [stroke-width]
       * @type {Number}
       */
						width: 2
					},
					label: {
						/**
       * [fontfamily]
       * @type {String}
       */
						fontfamily: 'sans-serif',
						/**
       * [fontsize for label]
       * @type {Number}
       */
						fontsize: 15,
						/**
       * [color for stroke attr]
       * @type {String}
       */
						color: '#a5a5a5'
					},
					priceLine: {
						/**
       * @type {String}
       */
						color: '#e7e7e7',
						/**
       * @type {Number}
       */
						width: 1
					}
				};
			}

			/**
    * @return {Object}
    */
		}, {
			key: 'initData',
			value: function initData() {
				return {
					/**
      * [id for trandline]
      * @type {String}
      */
					id: 'usd',
					/**
      * [points for create trandline]
      * @type {Array}
      */
					points: [227.5, 228, 229, 226.3, 225, 227.2, 223]
				};
			}

			/**
    * @param  {Object} [data]
    * @return {Object}
    */
		}, {
			key: 'prepareData',
			value: function prepareData(data) {
				var array = data.points.slice();
				array.sort();
				return {
					minVal: Math.floor(array[0]),
					maxVal: Math.ceil(array[array.length - 1])
				};
			}

			/**
    * @param  {Object} [data]
    * @param  {Object} [config]
    * @param  {Object} [container]
    */
		}, {
			key: 'createLabels',
			value: function createLabels(data, config, container) {
				var labelsData = {
					min: {
						x: 0,
						y: container.height - config.fontsize / 3,
						text: data.minVal
					},
					middle: {
						x: 0,
						y: container.height / 2 + config.fontsize / 3,
						text: data.minVal + (data.maxVal - data.minVal) / 2
					},
					max: {
						x: 0,
						y: config.fontsize / 2 + config.fontsize / 3,
						text: data.maxVal
					}
				};
				var minText = new Label(labelsData.min, config);
				var middleText = new Label(labelsData.middle, config);
				var maxText = new Label(labelsData.max, config);
				container.append(minText);
				container.append(middleText);
				container.append(maxText);
			}

			/**
    * @param {Object} [config]
    * @param {Object} [container]
    */
		}, {
			key: 'createPriceLines',
			value: function createPriceLines(config, container) {
				var data = {
					min: {
						x1: 50,
						y1: container.height - config.label.fontsize / 2,
						x2: container.width,
						y2: container.height - config.label.fontsize / 2
					},
					middle: {
						x1: 50,
						y1: container.height / 2,
						x2: container.width,
						y2: container.height / 2
					},
					max: {
						x1: 50,
						y1: config.label.fontsize / 2,
						x2: container.width,
						y2: config.label.fontsize / 2
					}
				};
				var minLine = new PriceLine(data.min, config.priceLine);
				var middleLine = new PriceLine(data.middle, config.priceLine);
				var maxLine = new PriceLine(data.max, config.priceLine);
				container.append(minLine);
				container.append(middleLine);
				container.append(maxLine);
			}

			/**
    * @param  {Object} [data]
    * @param  {Object} [tempData]
    * @param  {Object} [config]
    * @param  {Object} [container]
    */
		}, {
			key: 'createTrandline',
			value: function createTrandline(data, tempData, config, container) {
				var xStart = 50;
				var xStep = (container.width - xStart) / (data.points.length - 1);
				var yStart = container.height - config.label.fontsize;
				var yStep = yStart / (tempData.maxVal - tempData.minVal);
				var points = '';
				var trandline = undefined;
				data.points.forEach(function (val) {
					points += Math.floor(xStart) + ',' + Math.floor((tempData.maxVal - val) * yStep + config.label.fontsize / 2) + ' ';
					xStart += xStep;
				});
				var preparedData = {
					id: data.id,
					points: points
				};
				trandline = new Trandline(preparedData, config.trandline);
				container.append(trandline);
			}
		}]);

		return Chart;
	})();

	return Chart;
});
//# sourceMappingURL=./chart.js.map