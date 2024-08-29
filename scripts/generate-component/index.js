const fs = require('fs');
const { component, styles } = require('./template.js');

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./components/${name}/`;

if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

fs.writeFile(`${dir}/index.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/styles.module.scss`, styles, writeFileErrorHandler);

console.log(`${name} component created successfully!`);
