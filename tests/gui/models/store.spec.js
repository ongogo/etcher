'use strict';

const m = require('mochainon');
const Store = require('../../../lib/gui/models/store');

describe('Browser: Store', function() {

  describe('given a SET_FLASH_STATE action', function() {

    it('should not allow percentages over 100', function() {
      const OVER_HUNDRED = 101;

      const result = () => {
        Store.dispatch({
          type: Store.Actions.SET_FLASHING_FLAG
        });
        Store.dispatch({
          type: Store.Actions.SET_FLASH_STATE,
          data: {
            type: 'write',
            percentage: OVER_HUNDRED
          }
        });
      };

      m.chai.expect(result).to.throw(`Excessive state percentage: ${OVER_HUNDRED}`);
    });

    it('should not allow percentages under 0', function() {
      const UNDER_ZERO = -1;

      const result = () => {
        Store.dispatch({
          type: Store.Actions.SET_FLASHING_FLAG
        });
        Store.dispatch({
          type: Store.Actions.SET_FLASH_STATE,
          data: {
            type: 'write',
            percentage: UNDER_ZERO
          }
        });
      };

      m.chai.expect(result).to.throw(`Deficient state percentage: ${UNDER_ZERO}`);
    });

  });

});
