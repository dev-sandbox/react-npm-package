{
    "name": "react-npm-package",
    "version": "1.0.0",
    "description": "React Boilerplate Component for npm",
    "main": "./dist",
    "license": "MIT",
    "scripts": {
        "copy:assets": "cp package.json dist/",
        "build:webpack": "webpack",
        "build": "npm run build:webpack && npm run copy:assets"
    },
    "peerDependencies": {
        "prop-types": "^15.6.0",
        "react": "^16.0.0",
        "react-dom": "^16.0.0"
    },
    "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-core": "^6.21.0",
        "babel-loader": "^7.1.4",
        "babel-plugin-transform-object-rest-spread": "^6.26.0",
        "babel-plugin-transform-react-jsx": "^6.24.1",
        "babel-preset-env": "^1.6.1",
        "path": "^0.12.7",
        "prop-types": "^15.6.0",
        "react": "^16.0.0",
        "react-dom": "^16.0.0",
        "webpack": "^4.5.0",
        "webpack-cli": "^3.2.1"
    }
}
