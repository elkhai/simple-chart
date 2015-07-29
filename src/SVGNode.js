/**
 * abstract class for creation SVG nodes
 */
export default class SVGNode {
    /**
     * @param  {Object} [config]
     * @return {Node}
     */
    constructor(config) {
      if (config) {
        let node = document.createElementNS('http://www.w3.org/2000/svg', config.type);
        let attrs = config.attrs;
        for (let key in attrs) {
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
    }
}
