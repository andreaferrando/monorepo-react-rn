#!/usr/bin/env node
'use strict';

const debug = require('debug')('workspaces');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const generatedComment = '// @' + 'generated by expo-yarn-workspaces\n';

/**
 * Makes a module for the entry point of an Expo project based on the entry point specified by
 * package.json, perhaps implicitly.
 */
function makeEntryModule(projectPath) {
  debug(`Checking the main module for the project at %s`, projectPath);

  let packageJson = readPackageJson(projectPath);
  if (!packageJson) {
    debug(`The project doesn't have a package.json file; will not make a main module`);
    return;
  }

  let mainModule = packageJson.main || 'index.js';
  debug(`Using %s as the main module of the project`, mainModule);
  // For simplicity we don't handle directory module names that assume an "index.js" filename
  if (!mainModule.endsWith('.js')) {
    console.error(`The specified main module must be a file path ending with .js`);
    return;
  }

  // Look for the main module to see if it already exists. For simplicity we don't consider
  // platform-specific modules.
  let mainModulePath = path.join(projectPath, mainModule);
  if (fs.existsSync(mainModulePath)) {
    debug(`The main module at %s already exists; will not make a main module`, mainModule);
    if (isSymlinkedPath(mainModulePath)) {
      console.warn(
        `The main module at %s is symlinked and may not be accessible to Metro`,
        mainModulePath
      );
    }
    return;
  }

  // Generate the main module
  let mainModuleDirectory = path.dirname(mainModulePath);
  debug(`Ensuring that the directory for the main module exists: %s`, mainModuleDirectory);
  mkdirp.sync(mainModuleDirectory);
  if (isSymlinkedPath(mainModuleDirectory)) {
    console.warn(
      `The main module at %s is symlinked and may not be accessible to Metro`,
      mainModulePath
    );
  }

  debug(`Generating main module code from template`);
  let template = fs.readFileSync(path.join(__dirname, 'AppEntry.template.js'), 'utf8');
  // We use the physical path of the main module to compute the relative path to the project since
  // Node's module system resolves symlinks before loading modules
  let relativeProjectPath = path.relative(fs.realpathSync(mainModuleDirectory), projectPath);
  if (relativeProjectPath.split(path.sep)[0] !== '..') {
    relativeProjectPath = path.join('.', relativeProjectPath);
  }

  let code =
    generatedComment + '\n' + template.replace('{{relativeProjectPath}}', relativeProjectPath);
  fs.writeFileSync(mainModulePath, code);
  debug(`Wrote generated main module to %s`, mainModulePath);
}

function readPackageJson(projectPath) {
  let json;
  try {
    json = fs.readFileSync(path.join(projectPath, 'package.json'), 'utf8');
  } catch (e) {
    if (e.code === 'ENOENT') {
      return null;
    }
    throw e;
  }

  return JSON.parse(json);
}

function isSymlinkedPath(filePath) {
  return fs.realpathSync(filePath) !== path.resolve(filePath);
}

if (module === require.main) {
  makeEntryModule(path.resolve());
}
