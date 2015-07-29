import SVGNode from './SVGNode';
/**
 * class for creation price labels
 */
export default class Label extends SVGNode {

    /**
     * @param {Object} [data]
     * @param {Object} [config]
     * @returns {Node}
     */
    constructor(data, config) {
      let svgConfig;
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
      return super(svgConfig);
    }
}
