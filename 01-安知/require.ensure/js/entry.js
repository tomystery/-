
require.ensure(['./a.js'], function(require){
    require('./b.js');
});