/*
 * File: webpack.config.js
 * Project: escape-button-wordpress
 *
 * Created by Brendan Michaelsen on January 12, 2022 at 9:45 AM
 * Copyright © 2022 - 2024 Our Wave, Inc. All rights reserved.
 *
 * Last Modified: April 10, 2024 at 10:23 AM
 * Modified By: Brendan Michaelsen
 */

/**
 * Requires
 */

// Modules
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv").config();

// Package
const Package = require("./package.json");

/**
 * Environment
 */

dotenv.parsed.PACKAGE_VERSION = Package.version;
const isEnvDevelopment = process.env.NODE_ENV === "development";

/**
 * Configuration
 */

module.exports = function () {
	// Build configuration
	const configuration = {
		mode: isEnvDevelopment ? "development" : "production",
		entry: `${__dirname}/assets/js/index.js`,
		output: {
			path: `${__dirname}/svn/`,
			filename: isEnvDevelopment ? `[name].min.js` : `[name].min.js`,
			publicPath: "/public/",
		},
		optimization: {
			minimize: false,
		},
		module: {
			rules: [],
		},
		plugins: [
			new webpack.DefinePlugin({
				"process.env": JSON.stringify({
					PACKAGE_VERSION: Package.version,
				}),
			}),
			new CopyPlugin({
				patterns: [
					// Assets
					{ from: "assets/img", to: "assets" },

					// Trunk
					{ from: "assets/css", to: "trunk/assets/css" },
					{ from: "assets/js", to: "trunk/assets/js" },
					{ from: "index.php", to: "trunk" },
					{ from: "escapebutton.php", to: "trunk" },
					{ from: "readme.txt", to: "trunk" },

					// Tags
					{
						from: "assets/css",
						to: `tags/${Package.version}/assets/css`,
					},
					{
						from: "assets/js",
						to: `tags/${Package.version}/assets/js`,
					},
					{ from: "index.php", to: `tags/${Package.version}/` },
					{
						from: "escapebutton.php",
						to: `tags/${Package.version}/`,
					},
					{ from: "readme.txt", to: `tags/${Package.version}/` },
				].filter(Boolean),
			}),
		].filter(Boolean),
		resolve: {
			fallback: {
				fs: false,
				tls: false,
				net: false,
				path: false,
				zlib: false,
				http: false,
				https: false,
				stream: false,
				crypto: false,
				util: require.resolve("util/"),
				os: require.resolve("os-browserify/browser"),
				"crypto-browserify": require.resolve("crypto-browserify"),
			},
		},
	};

	// Return config
	return configuration;
};
