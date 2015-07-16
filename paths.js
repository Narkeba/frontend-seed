import path from 'path';

var folders = {
	root: __dirname,
	assets: path.resolve('./assets'),
	dist: path.resolve('./dist'),
	tmp: path.resolve('./.tmp')
};
folders.bower = path.join(folders.assets, 'vendor');

export default folders