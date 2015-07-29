import SVGNode from './SVGNode';

/**
 * [class for create price lines]
 */
export default class PriceLine extends SVGNode {

  /**
   * @param {Object} [data]
   * @param {Object} [config]
   * @returns {Node}
   */
  constructor(data, config) {
    let svgConfig = {
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
    return super(svgConfig);
  }
}
