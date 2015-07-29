import SVGNode from './SVGNode';
/**
 * class for creation trandline polyline
 */
export default class Trandline extends SVGNode {
    /**
     * @param  {Object} [data] - prepared data
     * @param  {Object} [config]
     * @return {Node}
     */
    constructor(data, config) {
      let svgConfig = {
        type: 'polyline',
        attrs: {
          id: 'trandline_' + data.id,
          fill: 'none',
          stroke: config.color,
          'stroke-width': config.width,
          points: data.points
        }
      };
      return super(svgConfig);
    }
}
