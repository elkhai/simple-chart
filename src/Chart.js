import Container from './Container';
import Label from './Label';
import Trandline from './Trandline';
import PriceLine from './PriceLine';

/**
 * Main Chart class
 */
export default class Chart {
  /**
   * @param  {String} [containerId]
   * @param  {Object} [data] - data for chart creation
   * @param  {Object} [config] - optional
   */
  constructor(containerId, data, config) {
    if (!config) {
      config = this.initConfig();
    }
    if (!data) {
      data = this.initData();
    }
    let container = new Container(containerId);
    let tempData = this.prepareData(data);
    this.createLabels(tempData, config.label, container);
    this.createPriceLines(config, container);
    this.createTrandline(data, tempData, config, container);
  }

  /**
   * initialize config, if input is empty
   */
  initConfig() {
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
    initData() {
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
    prepareData(data) {
      let array = data.points.slice();
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
    createLabels(data, config, container) {
      let labelsData = {
        min: {
          x: 0,
          y: container.height - config.fontsize / 3,
          text: data.minVal
        },
        middle: {
          x: 0,
          y: container.height / 2 + config.fontsize / 3,
          text: data.minVal + ((data.maxVal - data.minVal) / 2)
        },
        max: {
          x: 0,
          y: config.fontsize / 2 + config.fontsize / 3,
          text: data.maxVal
        }
      };
      let minText = new Label(labelsData.min, config);
      let middleText = new Label(labelsData.middle, config);
      let maxText = new Label(labelsData.max, config);
      container.append(minText);
      container.append(middleText);
      container.append(maxText);
    }

  /**
   * @param {Object} [config]
   * @param {Object} [container]
   */
    createPriceLines(config, container) {
      let data = {
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
      let minLine = new PriceLine(data.min, config.priceLine);
      let middleLine = new PriceLine(data.middle, config.priceLine);
      let maxLine = new PriceLine(data.max, config.priceLine);
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
    createTrandline(data, tempData, config, container) {
      let xStart = 50;
      let xStep = (container.width - xStart) / (data.points.length - 1);
      let yStart = container.height - config.label.fontsize;
      let yStep = yStart / (tempData.maxVal - tempData.minVal);
      let points = '';
      let trandline;
      data.points.forEach(function(val) {
        points += Math.floor(xStart) + ',' + Math.floor((tempData.maxVal - val) * yStep + config.label.fontsize / 2) + ' ';
        xStart += xStep;
      });
      let preparedData = {
        id: data.id,
        points: points
      };
      trandline = new Trandline(preparedData, config.trandline);
      container.append(trandline);
    }
}
