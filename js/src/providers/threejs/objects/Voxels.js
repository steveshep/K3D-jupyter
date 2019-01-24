'use strict';

var VoxelsHelper = require('./../helpers/Voxels');

/**
 * Loader strategy to handle SparseVoxels object
 * @method Voxel
 * @memberof K3D.Providers.ThreeJS.Objects
 * @param {Object} config all configurations params from JSON
 * @param {Object} K3D
 */
module.exports = {
    create: function (config, K3D) {
        return VoxelsHelper.create(
            config,
            VoxelsHelper.generateRegularChunks(27, config.voxels.shape, config.voxels.data),
            [config.voxels.shape[2], config.voxels.shape[1], config.voxels.shape[0]],
            K3D
        );
    }
};
